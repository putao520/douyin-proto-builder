import * as fs from "fs";
import * as parser from "@babel/parser";
import traverse, {Node} from "@babel/traverse";
import {
    ArrayExpression,
    ArrowFunctionExpression,
    AssignmentExpression,
    BlockStatement,
    CallExpression,
    ForStatement,
    FunctionExpression,
    Identifier,
    MemberExpression,
    NumericLiteral,
    ObjectExpression,
    ReturnStatement,
    SequenceExpression,
    StringLiteral,
    VariableDeclaration
} from "@babel/types";
import {anyObject, messageItem, messageObject, protoObject} from "./index.js";

const _traverse = traverse.default
const GetPropsMember = (node: MemberExpression): string | undefined => {
    if( node.property.type !== 'Identifier' ){
        return;
    }
    let _type = node.property.name
    if( _type === 'int64String' ){
        _type = 'int64'
    } else if( _type === 'uint64String') {
        _type = 'uint64'
    }
    return _type
}

const GetPropsMemberClass = (node: MemberExpression): string | undefined => {
    const memberNode = node
    if( memberNode.property.type !== 'Identifier' ){
        return;
    }
    const memberNodeProperty = memberNode.property
    if( memberNodeProperty.name !== 'decode' ){
        return;
    }
    const classArray: string[] = []
    let o = memberNode.object
    while(o && o.type === 'MemberExpression'){
        const property = o.property as Identifier
        classArray.push(property.name)
        o = o.object
    }
    const arr = classArray.reverse().splice(1)
    return arr.join('.')
}

const Decode = (child: Node, groupResult: messageObject) => {
    if( child.type === 'AssignmentExpression' ){
        const cmd_member_result: messageItem = {
            members: {},
            messages: {},
        }
        const _child: AssignmentExpression = child
        // 提取命令名称
        if( _child.left.type !== 'MemberExpression' ){
            return
        }
        const left: MemberExpression = _child.left
        if( left.property.type !== 'Identifier' ){
            return
        }
        const _property: Identifier = left.property

        const cmdName = _property.name
        // 生成协议数据
        if( _child.right.type !== 'CallExpression' ){
            return
        }
        const _right: CallExpression = _child.right
        if( _right.callee.type !== 'FunctionExpression' && _right.callee.type !== 'ArrowFunctionExpression' ){
            return
        }
        const r_callee_body: BlockStatement = _right.callee.body as BlockStatement
        // 主动找到 ReturnStatement
        let r_callee_body_body: ReturnStatement | undefined
        for(let i=0, l=r_callee_body.body.length; i<l;i++ ){
            const v = r_callee_body.body[i]
            if( v.type === 'ReturnStatement' ){
                r_callee_body_body = v
                break
            }
        }
        if( !r_callee_body_body ){
            return
        }
        const r_callee_body_body_argument: SequenceExpression = r_callee_body_body.argument as SequenceExpression
        if(r_callee_body_body_argument.expressions){
            const childResult: messageObject = {}
            r_callee_body_body_argument.expressions.forEach((v: Node)=>{
                Decode(v, childResult)
            })
            let v: AssignmentExpression|undefined
            for(let i=0,l=r_callee_body_body_argument.expressions.length; i<l; i++){
                const _v = r_callee_body_body_argument.expressions[i]
                if( _v.type === 'AssignmentExpression' ){
                    if( _v.left.type === 'MemberExpression'){
                        if( _v.left.property.type === 'Identifier' ){
                            if(_v.left.property.name === 'decode' ) {
                                v = _v
                                break
                            }
                        }
                    }

                }
            }
            if( !v ){
                return
            }
            const c_right = v.right as FunctionExpression
            const c_right_body = c_right.body
            const c_right_body_body = c_right_body.body[1] as ForStatement
            const v_init = c_right_body_body.init as VariableDeclaration
            let cmd_member_object: ObjectExpression|undefined
            for(let i=0,l=v_init.declarations.length; i<l; i++){
                const _v = v_init.declarations[i]
                if( _v.type === "VariableDeclarator" ){
                    if( _v.init && _v.init.type === 'ObjectExpression' ){
                        cmd_member_object = _v.init
                        break
                    }
                }
            }
            if(!cmd_member_object){
                return;
            }
            const cmd_member_nodes: Node[] = cmd_member_object.properties
            if(cmd_member_nodes){
                cmd_member_nodes.forEach((cmd_member_node: Node)=>{
                    if( cmd_member_node.type === 'ObjectProperty' ){
                        if( cmd_member_node.key.type !== 'NumericLiteral' ){
                            return
                        }
                        const _cmd_member_id_node = cmd_member_node.key
                        const _cmd_member_id = _cmd_member_id_node.value

                        const _cmd_member_node: ArrayExpression = cmd_member_node.value as ArrayExpression
                        const cmd_el = _cmd_member_node.elements
                        if(cmd_el){
                            const _cmd_el = cmd_el as Node[]
                            const memberNameNode = _cmd_el[0] as StringLiteral
                            // 成员名称
                            const memberName = memberNameNode.value
                            // 成员额外类型
                            const memberTypeExNode = _cmd_el[2] as NumericLiteral
                            const ex_type = memberTypeExNode.value
                            if(_cmd_el[1].type !== 'MemberExpression'){
                                return;
                            }
                            const protoObject: protoObject = {
                                id: _cmd_member_id,
                                type: undefined,
                                array: false
                            }
                            const memberTypeNode = _cmd_el[1]
                            switch (ex_type){
                                case 1:{    // 成员
                                    const _type = GetPropsMemberClass(memberTypeNode)
                                    if( !_type ){
                                        return;
                                    }
                                    protoObject.type = _type
                                    break
                                }
                                case 3:{    // 成员数组
                                    const _type = GetPropsMemberClass(memberTypeNode)
                                    if( !_type ){
                                        return;
                                    }
                                    protoObject.type = _type
                                    protoObject.array = true
                                    break
                                }
                                case 6:      // 数字数组
                                case 2: {    // 字符串数组
                                    const _type = GetPropsMember(memberTypeNode)
                                    if(!_type ){
                                        return;
                                    }
                                    protoObject.type = _type
                                    protoObject.array = true
                                    break
                                }
                                default: {
                                    const _type = GetPropsMember(memberTypeNode)
                                    if(!_type ){
                                        return;
                                    }
                                    protoObject.type = _type
                                }
                            }
                            if( protoObject.type ){
                                cmd_member_result.members[memberName] = protoObject
                            }
                        }
                    }
                })
            }

            if( Object.keys(childResult).length > 0 ){
                cmd_member_result.messages = childResult
            }
        }
        if( Object.keys(cmd_member_result.members).length > 0 ){
            groupResult[cmdName] = cmd_member_result
        }
    }
}
const Im = (node: Node, webCast: anyObject) =>{
    if( node.type !== 'AssignmentExpression' ){
        return
    }
    const nRight = node.right as CallExpression
    const nCallee = nRight.callee as ArrowFunctionExpression
    const nCalleeBody = nCallee.body as BlockStatement
    const nCalleeBodyBody = nCalleeBody.body[1] as ReturnStatement
    if(nCalleeBodyBody.argument){
        const expression = nCalleeBodyBody.argument as SequenceExpression
        const expressions = expression.expressions
        expressions.forEach((item: Node)=>{
            if( item.type === 'AssignmentExpression' ){
                const _item: AssignmentExpression = item
                const left = _item.left as MemberExpression
                if( left.property.type !== 'Identifier' ){
                    return
                }
                const left_property: Identifier= left.property
                const groupName = left_property.name

                const call = _item.right as CallExpression
                const func = call.callee as FunctionExpression
                const funcBody = func.body
                const returnBody = funcBody.body[1] as ReturnStatement
                const returnArgument = returnBody.argument as SequenceExpression
                const childNodeArray: Node[] = returnArgument.expressions
                const cmdResult: messageObject = {}
                childNodeArray.forEach((child: Node)=>{
                    Decode(child, cmdResult)
                })
                webCast[groupName] = cmdResult
            }
        })
    }
}

const Wrap = (node: Node, webCast: anyObject) =>{
    if( node.type !== 'AssignmentExpression' ){
        return
    }
    const nRight = node.right as CallExpression
    const nCallee = nRight.callee as ArrowFunctionExpression
    const nCalleeBody = nCallee.body as BlockStatement
    const nCalleeBodyBody = nCalleeBody.body[1] as ReturnStatement
    if(nCalleeBodyBody.argument){
        const expression = nCalleeBodyBody.argument as SequenceExpression
        const expressions = expression.expressions
        const cmdResult: messageObject = {}
        expressions.forEach((item: Node)=>{
            Decode(item, cmdResult)
        })
        webCast["live"] = cmdResult
    }
}

export const protoParser = (fileName: string, rootName: string, hasGroup: boolean)=>{
    const code = fs.readFileSync(fileName, "utf-8");
    const ast = parser.parse(code);
    const result: {[name:string]: any} = {}
    _traverse(ast, {
        exit(path) {
            if( path.isMemberExpression() ){
                const property = path.node.property
                if( property.type === "Identifier" && property.name === rootName ) {
                    const webCast:anyObject = {}
                    if( hasGroup ){
                        Im(path.parent, webCast)
                    } else {
                        Wrap(path.parent, webCast)
                    }
                    if( Object.keys(webCast).length > 0 ){
                        result[property.name] = webCast
                    }
                }
            }
        },
    });
    return result
}

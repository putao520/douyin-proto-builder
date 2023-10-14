import {anyObject, messageItem, messageObject, protoObject} from "./index.js";
import * as fs from "fs";
import path from "path";


const classDefined = new Set<string>()
const buildChildClassDefined = (key: string, messageResult: messageItem) => {
    Object.keys(messageResult.messages).forEach((childMessageKey)=>{
        const childMessage: messageItem = messageResult.messages[childMessageKey]
        buildChildClassDefined(key + "." + childMessageKey, childMessage)
    })
    classDefined.add(key)
}
const buildAllClassDefined = (protoResult: anyObject) => {
    classDefined.clear()
    classDefined.add("int32")
    classDefined.add("uint32")
    classDefined.add("int64")
    classDefined.add("uint64")
    classDefined.add("string")
    classDefined.add("float")
    classDefined.add("double")
    classDefined.add("bytes")
    classDefined.add("bool")
    const groupKeys = Object.keys(protoResult)
    groupKeys.forEach(groupKey=>{
        const group: anyObject = protoResult[groupKey] as anyObject
        Object.keys(group).forEach(key=>{
            const o: messageObject = group[key] as messageObject
            Object.keys(o).forEach((messageKey)=>{
                buildChildClassDefined(`${key}.${messageKey}`, o[messageKey])
            })
        })
    })
}

// const findDefined = (context: Context, memberName: string):
const buildMember = (context: Context, memberResult: {[name:string]: protoObject}, tab?: string) => {
    let v = ""
    const memberKeys = Object.keys(memberResult)
    memberKeys.forEach(memberKey=>{
        const member: protoObject = memberResult[memberKey]
        const memberType = member.type
        // 判断是否是基础类型
        const extraMemberType = `${context.groupKey}.${tab ? `${tab}.` : ""}${memberType ?? ""}`
        if( memberType && (classDefined.has(memberType)) || classDefined.has(extraMemberType)){
            v += `${tab ?? ""}  ${member.array ? "repeated " : ""}${member.type} ${memberKey} = ${member.id};\n`
        } else {
            console.warn(`[类型]${memberType} 无法定义`)
        }
    })
    return v
}
const buildMessage = (context: Context, messageKey: string, messageResult: messageItem, tab?: string) => {
    let content = ''
    const tabStr = tab ?? ""
    content += `${tabStr}message ${messageKey} {\n`
    content += buildMember(context, messageResult.members, tabStr)
    const l = Object.keys(messageResult.messages)
    l.forEach((childMessageKey)=>{
        content += buildMessage(context, childMessageKey, messageResult.messages[childMessageKey], tabStr + "  ")
    })
    content += `${tabStr}}\n`
    return content
}
const appendImport = (group: anyObject, category: string, mainStr: string)=>{
    let str = ""
    Object.keys(group).forEach(key=>{
        if( key !== mainStr ){
            str += `import "${category}.${key}.proto";\n`
        }
    })
    return str
}

interface Context {
    groupKey: string
}
export const protoBuilder = (fileArray: string[], protoResult: anyObject, category: string, protoDir?: string, outDir?: string) => {
    buildAllClassDefined(protoResult)
    const groupKeys = Object.keys(protoResult)
    if( outDir && !fs.existsSync(outDir) ){
        fs.mkdirSync(outDir, {recursive: true})
    }
    groupKeys.forEach(groupKey=>{
        const group: anyObject = protoResult[groupKey] as anyObject
        Object.keys(group).forEach(key=>{
            let content = `syntax = "proto3";\n`
            content += `package ${key};\n`
            if( key === "im" ){
                content += appendImport(group, category, "im")
            }
            const context: Context = {
                groupKey: key,
            }
            const v = group[key] as anyObject
            Object.keys(v).forEach(k=>{
                content += buildMessage(context, k, v[k] as messageItem)
            })
            const fileName = `${category}.${key}.proto`
            const p = protoDir ?
                path.resolve(protoDir, fileName) :
                fileName
            if( fs.existsSync(p) ){
                fs.rmSync(p)
            }
            fs.writeFileSync(p, content)
            fileArray.push(fileName)
        })

    })
}

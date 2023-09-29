import {protoParser} from "./parser.js";
import {protoBuilder} from "./builder.js";

export type anyObject = {[name:string]: any}

export interface protoObject {
    id: number,
    type?: string,
    array: boolean
}
export interface messageItem {
    members: {[name:string]: protoObject},
    messages: {[name:string]: messageItem}
}
export interface messageObject {
    [name:string]: messageItem
}

export const buildDouyinProto = (fileArray: string[], filePath: string, category: string, rootName: string, hasGroup: boolean)=>{
    console.log(`[douyin]parsing ${filePath}......`)
    const result = protoParser(filePath, rootName, hasGroup)
    console.log("[douyin]building ......")
    protoBuilder(fileArray, result, category, "./douyin/proto", "./douyin/out")
    console.log("[douyin]end ......")
}

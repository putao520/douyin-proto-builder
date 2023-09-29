import {buildDouyinProto} from "./douyin/index.js";
import {exec} from "child_process"
const fileArray: string[] = []
buildDouyinProto(fileArray, "./douyin/in/ecom-schema.js", "ecom", "live", false)
buildDouyinProto(fileArray, "./douyin/in/live-schema.js", "live","webcast", true)
buildDouyinProto(fileArray, "./douyin/in/transport-schema.js", "transport","webcast", true)

// 生成js文件
const cmd = `npx protoc --ts_out ./douyin/out --proto_path ./douyin/proto ${fileArray.join(" ")}`
console.log(cmd)
exec(cmd)


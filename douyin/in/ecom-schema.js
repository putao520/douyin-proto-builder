"use strict";
(self.webpackChunkdouyin_live_v2 = self.webpackChunkdouyin_live_v2 || []).push([[6282], {
    66518: (t,e,n)=>{
        n.r(e),
            n.d(e, {
                default: ()=>u,
                live: ()=>d
            });
        var i = n(12116)
            , o = n(72109)
            , r = n.n(o)
            , a = o.Reader
            , s = o.util
            , u = o.roots.biz || (o.roots.biz = {});
        function c(t, e) {
            for (let n in e)
                t.prototype[n] = e[n]
        }
        function p(t, e, n, i) {
            var o = t[n[0]]
                , r = 1 & n[2]
                , a = n[2] >> 1 & 1
                , s = n[2] >> 2 & 1;
            if (a) {
                if (o && o.length || (t[n[0]] = []),
                s && (7 & i) == 2)
                    for (var u = e.uint32() + e.pos; e.pos < u; )
                        t[n[0]].push(n[1].call(e));
                else
                    t[n[0]].push(n[1].call(e, e, r && e.uint32()))
            } else
                t[n[0]] = n[1].call(e, e, r && e.uint32())
        }
        var l = s.zeroLong || s.Long.fromBits(0, 0, !1)
            , f = s.zeroULong || s.Long.fromBits(0, 0, !0)
            , d = u.live = (()=>{
                let t = {};
                return t.LiveCommonMessage = function() {
                    function t(t) {
                        if (t)
                            for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                null != t[e[n]] && (this[e[n]] = t[e[n]])
                    }
                    return c(t, {
                        msg_type: 0,
                        screenshot_timestamp: f,
                        room_tag_offline_info: null,
                        filter_switch_change_data: null,
                        gmv_data: null
                    }),
                        t.decode = function(t, e) {
                            t instanceof a || (t = a.create(t));
                            for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.LiveCommonMessage(u.live.LiveCommonMessage.prototype), o = {
                                1: ["msg_type", t.int32, 0],
                                2: ["screenshot_timestamp", t.int64String, 0],
                                3: ["room_tag_offline_info", u.live.RoomTagOfflineInfo.decode, 1],
                                4: ["filter_switch_change_data", u.live.FilterSwitchChangeData.decode, 1],
                                5: ["gmv_data", u.live.GMVData.decode, 1]
                            }; t.pos < n; ) {
                                var r = t.uint32()
                                    , s = r >>> 3;
                                if (o[s]) {
                                    p(i, t, o[s], r);
                                    continue
                                }
                                t.skipType(7 & r)
                            }
                            return i
                        }
                        ,
                        t
                }(),
                    t.RoomTagOfflineInfo = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            tag_type: f,
                            user_toast: ""
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.RoomTagOfflineInfo(u.live.RoomTagOfflineInfo.prototype), o = {
                                    1: ["tag_type", t.int64String, 0],
                                    2: ["user_toast", t.string, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.UpIcon = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            name: "",
                            up_icon: "",
                            up_desc: "",
                            public_screen_notice: ""
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.UpIcon(u.live.UpIcon.prototype), o = {
                                    1: ["name", t.string, 0],
                                    2: ["up_icon", t.string, 0],
                                    3: ["up_desc", t.string, 0],
                                    4: ["public_screen_notice", t.string, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.FilterSwitchChangeData = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            enable: !1,
                            up_icon: null
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.FilterSwitchChangeData(u.live.FilterSwitchChangeData.prototype), o = {
                                    1: ["enable", t.bool, 0],
                                    2: ["up_icon", u.live.UpIcon.decode, 1]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.GMVData = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            gmv: ""
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.GMVData(u.live.GMVData.prototype), o = {
                                    1: ["gmv", t.string, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.DelayParam = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            delay_strategy: 0,
                            min_delay_ms: 0,
                            max_delay_ms: 0
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.DelayParam(u.live.DelayParam.prototype), o = {
                                    1: ["delay_strategy", t.int32, 0],
                                    2: ["min_delay_ms", t.int32, 0],
                                    3: ["max_delay_ms", t.int32, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.HotAtmosphere = function() {
                        function t(t) {
                            if (this.bg_colors = [],
                                this.border_colors = [],
                                t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            img: "",
                            sale_num: "",
                            type: f,
                            num: "",
                            bg_color: "",
                            border_color: "",
                            left_margin: f,
                            ui_type: f,
                            bg_colors: s.emptyArray,
                            border_colors: s.emptyArray,
                            top_img: ""
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.HotAtmosphere(u.live.HotAtmosphere.prototype), o = {
                                    1: ["img", t.string, 0],
                                    2: ["sale_num", t.string, 0],
                                    3: ["type", t.int64String, 0],
                                    4: ["num", t.string, 0],
                                    5: ["bg_color", t.string, 0],
                                    6: ["border_color", t.string, 0],
                                    7: ["left_margin", t.int64String, 0],
                                    8: ["ui_type", t.int64String, 0],
                                    9: ["bg_colors", t.string, 2],
                                    10: ["border_colors", t.string, 2],
                                    11: ["top_img", t.string, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.BarrageBuyInfo = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            nick_name: "",
                            purchase_cnt: f,
                            text: "",
                            icon: ""
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.BarrageBuyInfo(u.live.BarrageBuyInfo.prototype), o = {
                                    1: ["nick_name", t.string, 0],
                                    2: ["purchase_cnt", t.int64String, 0],
                                    3: ["text", t.string, 0],
                                    4: ["icon", t.string, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.InteractionData = function() {
                        function t(t) {
                            if (this.contents = [],
                                t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            full: !1,
                            contents: s.emptyArray
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.InteractionData(u.live.InteractionData.prototype), o = {
                                    1: ["full", t.bool, 0],
                                    2: ["contents", u.live.InteractionContent.decode, 3]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.InteractionContent = function() {
                        function t(t) {
                            if (this.content = [],
                                this.event_param = {},
                                t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            check: null,
                            priority: 0,
                            loop_count: 0,
                            content: s.emptyArray,
                            event_param: s.emptyObject
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n, i, o = void 0 === e ? t.len : t.pos + e, r = new u.live.InteractionContent(u.live.InteractionContent.prototype), c = {
                                    1: ["check", u.live.InteractionContentCheck.decode, 1],
                                    2: ["priority", t.int32, 0],
                                    3: ["loop_count", t.int32, 0],
                                    4: ["content", u.live.InteractionElement.decode, 3]
                                }; t.pos < o; ) {
                                    var l = t.uint32()
                                        , f = l >>> 3;
                                    if (c[f]) {
                                        p(r, t, c[f], l);
                                        continue
                                    }
                                    if (5 === f) {
                                        r.event_param === s.emptyObject && (r.event_param = {});
                                        var d = t.uint32() + t.pos;
                                        for (n = "",
                                                 i = ""; t.pos < d; ) {
                                            var _ = t.uint32();
                                            switch (_ >>> 3) {
                                                case 1:
                                                    n = t.string();
                                                    break;
                                                case 2:
                                                    i = t.string();
                                                    break;
                                                default:
                                                    t.skipType(7 & _)
                                            }
                                        }
                                        r.event_param[n] = i
                                    } else
                                        t.skipType(7 & l)
                                }
                                return r
                            }
                            ,
                            t
                    }(),
                    t.InteractionContentCheck = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            product_id: f,
                            index: 0
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.InteractionContentCheck(u.live.InteractionContentCheck.prototype), o = {
                                    1: ["product_id", t.int64String, 0],
                                    2: ["index", t.int32, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.InteractionElement = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            element_type: 0,
                            text: "",
                            text_color: "",
                            avatars: null,
                            blank_width: 0
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.InteractionElement(u.live.InteractionElement.prototype), o = {
                                    1: ["element_type", t.int32, 0],
                                    2: ["text", t.string, 0],
                                    3: ["text_color", t.string, 0],
                                    4: ["avatars", u.live.InteractionAvatar.decode, 1],
                                    5: ["blank_width", t.int32, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.InteractionAvatar = function() {
                        function t(t) {
                            if (this.url_list = [],
                                t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            url_list: s.emptyArray,
                            width: 0,
                            height: 0
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.InteractionAvatar(u.live.InteractionAvatar.prototype), o = {
                                    1: ["url_list", t.string, 2],
                                    2: ["width", t.int32, 0],
                                    3: ["height", t.int32, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.LiveInteractionMessage = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            msg_type: 0,
                            barrage_buy_info: null,
                            interaction_data: null
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.LiveInteractionMessage(u.live.LiveInteractionMessage.prototype), o = {
                                    1: ["msg_type", t.int32, 0],
                                    2: ["barrage_buy_info", u.live.BarrageBuyInfo.decode, 1],
                                    3: ["interaction_data", u.live.InteractionData.decode, 1]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.Img = function() {
                        function t(t) {
                            if (this.url_list = [],
                                t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            url_list: s.emptyArray,
                            height: 0,
                            width: 0
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.Img(u.live.Img.prototype), o = {
                                    1: ["url_list", t.string, 2],
                                    2: ["height", t.int32, 0],
                                    3: ["width", t.int32, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.CurrentUserInfo = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            user_pic: null,
                            user_name: "",
                            user_id: f
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.CurrentUserInfo(u.live.CurrentUserInfo.prototype), o = {
                                    1: ["user_pic", u.live.Img.decode, 1],
                                    2: ["user_name", t.string, 0],
                                    3: ["user_id", t.int64String, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.IncrPriceList = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            price: f,
                            range: f
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.IncrPriceList(u.live.IncrPriceList.prototype), o = {
                                    1: ["price", t.int64String, 0],
                                    2: ["range", t.int64String, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.AuctionInfo = function() {
                        function t(t) {
                            if (this.incr_price_lists = [],
                                t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            price: f,
                            price_label: "",
                            status: 0,
                            jump_url: "",
                            current_user_info: null,
                            incr_price_lists: s.emptyArray,
                            button_label: "",
                            product_id: f,
                            end_time: f,
                            biz_id: 0
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.AuctionInfo(u.live.AuctionInfo.prototype), o = {
                                    1: ["price", t.int64String, 0],
                                    2: ["price_label", t.string, 0],
                                    3: ["status", t.int32, 0],
                                    4: ["jump_url", t.string, 0],
                                    5: ["current_user_info", u.live.CurrentUserInfo.decode, 1],
                                    6: ["incr_price_lists", u.live.IncrPriceList.decode, 3],
                                    7: ["button_label", t.string, 0],
                                    8: ["product_id", t.int64String, 0],
                                    9: ["end_time", t.int64String, 0],
                                    10: ["biz_id", t.int32, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.AuctionSuccess = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            title: "",
                            product_id: f,
                            product_name: "",
                            product_pic: "",
                            price: f,
                            charge: f,
                            freight: f,
                            total: f,
                            button_label: "",
                            jump_url: "",
                            freight_collect: "",
                            left_payment_time: f,
                            biz_id: 0,
                            deposit_info: ""
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.AuctionSuccess(u.live.AuctionSuccess.prototype), o = {
                                    1: ["title", t.string, 0],
                                    2: ["product_id", t.int64String, 0],
                                    3: ["product_name", t.string, 0],
                                    4: ["product_pic", t.string, 0],
                                    5: ["price", t.int64String, 0],
                                    6: ["charge", t.int64String, 0],
                                    7: ["freight", t.int64String, 0],
                                    8: ["total", t.int64String, 0],
                                    9: ["button_label", t.string, 0],
                                    10: ["jump_url", t.string, 0],
                                    11: ["freight_collect", t.string, 0],
                                    12: ["left_payment_time", t.int64String, 0],
                                    13: ["biz_id", t.int32, 0],
                                    14: ["deposit_info", t.string, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.RedpackActivityInfo = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            redpack_type: f,
                            redpack_activity_id: "",
                            redpack_activity_name: "",
                            start_apply_time: f,
                            end_apply_time: f,
                            preheat_time: f,
                            total_amount: f,
                            author_avatar_url: "",
                            author_name: "",
                            pendant_background_url: "",
                            redpack_front_background_url: "",
                            redpack_label: "",
                            redpack_after_background_url: "",
                            redpack_after_belt_url: "",
                            scatter_time: f,
                            server_time: f,
                            max_amount: f,
                            show_type: f,
                            shorttouch_pendant_background_url: "",
                            shorttouch_pendant_icon_url: "",
                            shorttouch_lottie_url: ""
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.RedpackActivityInfo(u.live.RedpackActivityInfo.prototype), o = {
                                    1: ["redpack_type", t.int64String, 0],
                                    2: ["redpack_activity_id", t.string, 0],
                                    3: ["redpack_activity_name", t.string, 0],
                                    4: ["start_apply_time", t.int64String, 0],
                                    5: ["end_apply_time", t.int64String, 0],
                                    6: ["preheat_time", t.int64String, 0],
                                    7: ["total_amount", t.int64String, 0],
                                    8: ["author_avatar_url", t.string, 0],
                                    9: ["author_name", t.string, 0],
                                    10: ["pendant_background_url", t.string, 0],
                                    11: ["redpack_front_background_url", t.string, 0],
                                    12: ["redpack_label", t.string, 0],
                                    13: ["redpack_after_background_url", t.string, 0],
                                    14: ["redpack_after_belt_url", t.string, 0],
                                    15: ["scatter_time", t.int64String, 0],
                                    16: ["server_time", t.int64String, 0],
                                    17: ["max_amount", t.int64String, 0],
                                    18: ["show_type", t.int64String, 0],
                                    19: ["shorttouch_pendant_background_url", t.string, 0],
                                    20: ["shorttouch_pendant_icon_url", t.string, 0],
                                    21: ["shorttouch_lottie_url", t.string, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.BenefitLabel = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            LeftText: "",
                            RightText: "",
                            TextStyle: 0,
                            ColorStyle: 0,
                            DivLine: 0
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.BenefitLabel(u.live.BenefitLabel.prototype), o = {
                                    1: ["LeftText", t.string, 0],
                                    2: ["RightText", t.string, 0],
                                    3: ["TextStyle", t.int32, 0],
                                    4: ["ColorStyle", t.int32, 0],
                                    5: ["DivLine", t.int32, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.LotteryInfoList = function() {
                        function t(t) {
                            if (this.text = [],
                                t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            activity_id: "",
                            task_type: f,
                            open_time: f,
                            user_activity_status: f,
                            win_record_id: "",
                            result_label: "",
                            button_label: "",
                            text: s.emptyArray,
                            jump_url: "",
                            lottery_type: f,
                            elastic_title: "",
                            benefit_label: null
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.LotteryInfoList(u.live.LotteryInfoList.prototype), o = {
                                    1: ["activity_id", t.string, 0],
                                    2: ["task_type", t.int64String, 0],
                                    3: ["open_time", t.int64String, 0],
                                    4: ["user_activity_status", t.int64String, 0],
                                    5: ["win_record_id", t.string, 0],
                                    6: ["result_label", t.string, 0],
                                    7: ["button_label", t.string, 0],
                                    8: ["text", t.string, 2],
                                    9: ["jump_url", t.string, 0],
                                    10: ["lottery_type", t.int64String, 0],
                                    11: ["elastic_title", t.string, 0],
                                    12: ["benefit_label", u.live.BenefitLabel.decode, 1]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.WinLotteryAlert = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            title: "",
                            content: "",
                            button_label: ""
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.WinLotteryAlert(u.live.WinLotteryAlert.prototype), o = {
                                    1: ["title", t.string, 0],
                                    2: ["content", t.string, 0],
                                    3: ["button_label", t.string, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.WinLotteryInfo = function() {
                        function t(t) {
                            if (this.activity_price = [],
                                t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            title: "",
                            name: "",
                            img: "",
                            button_label: "",
                            win_record_id: "",
                            activity_id: "",
                            is_addressed: !1,
                            alert: null,
                            is_win: !1,
                            jump_url: "",
                            product_id: f,
                            activity_price: s.emptyArray,
                            buy_time: f,
                            lottery_type: f,
                            product_id_str: "",
                            lottery_info_list: null
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.WinLotteryInfo(u.live.WinLotteryInfo.prototype), o = {
                                    1: ["title", t.string, 0],
                                    2: ["name", t.string, 0],
                                    3: ["img", t.string, 0],
                                    4: ["button_label", t.string, 0],
                                    5: ["win_record_id", t.string, 0],
                                    6: ["activity_id", t.string, 0],
                                    7: ["is_addressed", t.bool, 0],
                                    8: ["alert", u.live.WinLotteryAlert.decode, 1],
                                    9: ["is_win", t.bool, 0],
                                    10: ["jump_url", t.string, 0],
                                    11: ["product_id", t.int64String, 0],
                                    12: ["activity_price", t.int64String, 6],
                                    13: ["buy_time", t.int64String, 0],
                                    14: ["lottery_type", t.int64String, 0],
                                    15: ["product_id_str", t.string, 0],
                                    16: ["lottery_info_list", u.live.LotteryInfoList.decode, 1]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.CouponActivityInfoMessage = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            activity_type: f,
                            before_text: "",
                            before_button: "",
                            after_text: "",
                            after_button: ""
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.CouponActivityInfoMessage(u.live.CouponActivityInfoMessage.prototype), o = {
                                    1: ["activity_type", t.int64String, 0],
                                    2: ["before_text", t.string, 0],
                                    3: ["before_button", t.string, 0],
                                    4: ["after_text", t.string, 0],
                                    5: ["after_button", t.string, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.CouponMetaInfoMessage = function() {
                        function t(t) {
                            if (this.product_ids = [],
                                t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            coupon_meta_id: "",
                            start_time: "",
                            expire_time: "",
                            period_type: f,
                            valid_period: f,
                            start_apply_time: "",
                            end_apply_time: "",
                            coupon_name: "",
                            url: "",
                            threshold: f,
                            credit: f,
                            max_apply_times: f,
                            type: f,
                            type_detail: "",
                            discount: 0,
                            shop_id: "",
                            pay_type: f,
                            max_discount_limit: f,
                            shop_name: "",
                            type_string: "",
                            what_coupon: "",
                            coupon_string: "",
                            channel_id: f,
                            left_amount: f,
                            has_applied: f,
                            status: f,
                            shop_logo: "",
                            is_show: f,
                            total_amount: f,
                            live_coupon_status: 0,
                            coupon_source: 0,
                            user_apply_times: f,
                            can_continue_apply: !1,
                            coupon_status: !1,
                            coupon_reset: !1,
                            start_time_timestamp: f,
                            expire_time_timestamp: f,
                            avatar: "",
                            kol_uid: f,
                            product_ids: s.emptyArray,
                            platform_sub_type: f,
                            has_available_goods: !1,
                            type_title: "",
                            kol_user_tag: f,
                            type_icon: "",
                            type_icon_width: f,
                            type_icon_height: f,
                            coupon_category: "",
                            extra_data: ""
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.CouponMetaInfoMessage(u.live.CouponMetaInfoMessage.prototype), o = {
                                    1: ["coupon_meta_id", t.string, 0],
                                    2: ["start_time", t.string, 0],
                                    3: ["expire_time", t.string, 0],
                                    4: ["period_type", t.int64String, 0],
                                    5: ["valid_period", t.int64String, 0],
                                    6: ["start_apply_time", t.string, 0],
                                    7: ["end_apply_time", t.string, 0],
                                    8: ["coupon_name", t.string, 0],
                                    9: ["url", t.string, 0],
                                    10: ["threshold", t.int64String, 0],
                                    11: ["credit", t.int64String, 0],
                                    12: ["max_apply_times", t.int64String, 0],
                                    13: ["type", t.int64String, 0],
                                    14: ["type_detail", t.string, 0],
                                    15: ["discount", t.double, 0],
                                    16: ["shop_id", t.string, 0],
                                    17: ["pay_type", t.int64String, 0],
                                    18: ["max_discount_limit", t.int64String, 0],
                                    19: ["shop_name", t.string, 0],
                                    20: ["type_string", t.string, 0],
                                    21: ["what_coupon", t.string, 0],
                                    22: ["coupon_string", t.string, 0],
                                    23: ["channel_id", t.int64String, 0],
                                    24: ["left_amount", t.int64String, 0],
                                    25: ["has_applied", t.int64String, 0],
                                    26: ["status", t.int64String, 0],
                                    27: ["shop_logo", t.string, 0],
                                    28: ["is_show", t.int64String, 0],
                                    29: ["total_amount", t.int64String, 0],
                                    30: ["live_coupon_status", t.int32, 0],
                                    31: ["coupon_source", t.int32, 0],
                                    32: ["user_apply_times", t.int64String, 0],
                                    33: ["can_continue_apply", t.bool, 0],
                                    34: ["coupon_status", t.bool, 0],
                                    35: ["coupon_reset", t.bool, 0],
                                    36: ["start_time_timestamp", t.int64String, 0],
                                    37: ["expire_time_timestamp", t.int64String, 0],
                                    38: ["avatar", t.string, 0],
                                    39: ["kol_uid", t.int64String, 0],
                                    40: ["product_ids", t.int64String, 6],
                                    41: ["platform_sub_type", t.int64String, 0],
                                    42: ["has_available_goods", t.bool, 0],
                                    43: ["type_title", t.string, 0],
                                    45: ["kol_user_tag", t.int64String, 0],
                                    46: ["type_icon", t.string, 0],
                                    47: ["type_icon_width", t.int64String, 0],
                                    48: ["type_icon_height", t.int64String, 0],
                                    49: ["coupon_category", t.string, 0],
                                    50: ["extra_data", t.string, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.CouponInfo = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            meta_id: f,
                            server_time: f,
                            countdown: f,
                            activity_json_str: "",
                            coupon_type: 0,
                            activity_info: null,
                            coupon_meta: null,
                            meta_id_str: ""
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.CouponInfo(u.live.CouponInfo.prototype), o = {
                                    1: ["meta_id", t.int64String, 0],
                                    2: ["server_time", t.int64String, 0],
                                    3: ["countdown", t.int64String, 0],
                                    4: ["activity_json_str", t.string, 0],
                                    5: ["coupon_type", t.int32, 0],
                                    6: ["activity_info", u.live.CouponActivityInfoMessage.decode, 1],
                                    7: ["coupon_meta", u.live.CouponMetaInfoMessage.decode, 1],
                                    8: ["meta_id_str", t.string, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.BrowseInfo = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            duration: 0,
                            task_index: "",
                            stop_duration: 0
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.BrowseInfo(u.live.BrowseInfo.prototype), o = {
                                    1: ["duration", t.int32, 0],
                                    2: ["task_index", t.string, 0],
                                    3: ["stop_duration", t.int32, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.TaskInfo = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            task_type: 0,
                            task_status: 0,
                            report_event: "",
                            browse_task_info: null
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.TaskInfo(u.live.TaskInfo.prototype), o = {
                                    1: ["task_type", t.int32, 0],
                                    2: ["task_status", t.int32, 0],
                                    3: ["report_event", t.string, 0],
                                    4: ["browse_task_info", u.live.BrowseInfo.decode, 1]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.LiveMarketingMessage = function() {
                        function t(t) {
                            if (this.product_ids = [],
                                t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            msg_type: 0,
                            product_ids: s.emptyArray,
                            auction_success: null,
                            auction_info: null,
                            redpack_activity_info: null,
                            win_lotteryinfo: null,
                            lottery_info_list: null,
                            coupon_info: null,
                            task_info: null
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.LiveMarketingMessage(u.live.LiveMarketingMessage.prototype), o = {
                                    1: ["msg_type", t.int32, 0],
                                    2: ["product_ids", t.int64String, 6],
                                    3: ["auction_success", u.live.AuctionSuccess.decode, 1],
                                    4: ["auction_info", u.live.AuctionInfo.decode, 1],
                                    5: ["redpack_activity_info", u.live.RedpackActivityInfo.decode, 1],
                                    6: ["win_lotteryinfo", u.live.WinLotteryInfo.decode, 1],
                                    7: ["lottery_info_list", u.live.LotteryInfoList.decode, 1],
                                    8: ["coupon_info", u.live.CouponInfo.decode, 1],
                                    9: ["task_info", u.live.TaskInfo.decode, 1]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.PopProductInfo = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            promotion_id: f,
                            product_id: f,
                            explain_time: f
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.PopProductInfo(u.live.PopProductInfo.prototype), o = {
                                    1: ["promotion_id", t.int64String, 0],
                                    2: ["product_id", t.int64String, 0],
                                    3: ["explain_time", t.int64String, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.LivePopMessage = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            msg_type: 0,
                            bubble_type: 0,
                            promotion_id: f,
                            hot_atmosphere: null,
                            delay_param: null,
                            product_info: null
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.LivePopMessage(u.live.LivePopMessage.prototype), o = {
                                    1: ["msg_type", t.int32, 0],
                                    2: ["bubble_type", t.int32, 0],
                                    3: ["promotion_id", t.int64String, 0],
                                    4: ["hot_atmosphere", u.live.HotAtmosphere.decode, 1],
                                    5: ["delay_param", u.live.DelayParam.decode, 1],
                                    6: ["product_info", u.live.PopProductInfo.decode, 1]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.CategoryRefreshMessage = function() {
                        function t(t) {
                            if (this.category_info = [],
                                t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            category_info: s.emptyArray,
                            update_ts: f,
                            update_toast: ""
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.CategoryRefreshMessage(u.live.CategoryRefreshMessage.prototype), o = {
                                    1: ["category_info", u.live.CategoryRefreshMessage.CategoryInfo.decode, 3],
                                    2: ["update_ts", t.int64String, 0],
                                    3: ["update_toast", t.string, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t.CategoryInfo = function() {
                                function t(t) {
                                    if (t)
                                        for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                            null != t[e[n]] && (this[e[n]] = t[e[n]])
                                }
                                return c(t, {
                                    unique_index: "",
                                    name: "",
                                    category_id: f,
                                    category_type: f,
                                    need_reload: !1
                                }),
                                    t.decode = function(t, e) {
                                        t instanceof a || (t = a.create(t));
                                        for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.CategoryRefreshMessage.CategoryInfo(u.live.CategoryRefreshMessage.CategoryInfo.prototype), o = {
                                            1: ["unique_index", t.string, 0],
                                            2: ["name", t.string, 0],
                                            3: ["category_id", t.int64String, 0],
                                            4: ["category_type", t.int64String, 0],
                                            5: ["need_reload", t.bool, 0]
                                        }; t.pos < n; ) {
                                            var r = t.uint32()
                                                , s = r >>> 3;
                                            if (o[s]) {
                                                p(i, t, o[s], r);
                                                continue
                                            }
                                            t.skipType(7 & r)
                                        }
                                        return i
                                    }
                                    ,
                                    t
                            }(),
                            t
                    }(),
                    t.ProductListRefreshMessage = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            update_ts: f,
                            update_toast: ""
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.ProductListRefreshMessage(u.live.ProductListRefreshMessage.prototype), o = {
                                    1: ["update_ts", t.int64String, 0],
                                    2: ["update_toast", t.string, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.ProductListUpdateMessage = function() {
                        function t(t) {
                            if (this.update_product_info = [],
                                this.update_category_info = [],
                                t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            update_timestamp: f,
                            update_toast: "",
                            update_product_info: s.emptyArray,
                            total: f,
                            update_category_info: s.emptyArray,
                            msg_type: 0
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.ProductListUpdateMessage(u.live.ProductListUpdateMessage.prototype), o = {
                                    1: ["update_timestamp", t.int64String, 0],
                                    2: ["update_toast", t.string, 0],
                                    3: ["update_product_info", u.live.ProductInfo.decode, 3],
                                    4: ["total", t.int64String, 0],
                                    5: ["update_category_info", u.live.CategoryInfo.decode, 3],
                                    6: ["msg_type", t.int32, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.ProductInfo = function() {
                        function t(t) {
                            if (this.target_flash_uids = [],
                                t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            promotion_id: f,
                            index: 0,
                            target_flash_uids: s.emptyArray,
                            explain_type: f
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.ProductInfo(u.live.ProductInfo.prototype), o = {
                                    1: ["promotion_id", t.int64String, 0],
                                    2: ["index", t.int32, 0],
                                    3: ["target_flash_uids", t.int64String, 6],
                                    4: ["explain_type", t.int64String, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.CategoryInfo = function() {
                        function t(t) {
                            if (this.promotion_ids = [],
                                t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            id: 0,
                            name: "",
                            promotion_ids: s.emptyArray,
                            type: "",
                            unique_index: ""
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.CategoryInfo(u.live.CategoryInfo.prototype), o = {
                                    1: ["id", t.int32, 0],
                                    2: ["name", t.string, 0],
                                    3: ["promotion_ids", t.string, 2],
                                    4: ["type", t.string, 0],
                                    5: ["unique_index", t.string, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.ProductRefreshMessage = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            promotion_id: f,
                            product_id: f,
                            channel_type: f,
                            channel_id: f,
                            update_ts: f,
                            action_type: 0,
                            request_info: null,
                            product_info: null
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.ProductRefreshMessage(u.live.ProductRefreshMessage.prototype), o = {
                                    1: ["promotion_id", t.int64String, 0],
                                    2: ["product_id", t.int64String, 0],
                                    3: ["channel_type", t.int64String, 0],
                                    4: ["channel_id", t.int64String, 0],
                                    5: ["update_ts", t.int64String, 0],
                                    6: ["action_type", t.int32, 0],
                                    7: ["request_info", u.live.ProductRefreshMessage.RequestInfo.decode, 1],
                                    8: ["product_info", u.live.ProductRefreshMessage.ProductInfo.decode, 1]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t.RequestInfo = function() {
                                function t(t) {
                                    if (this.list = {},
                                        this.pop = {},
                                        t)
                                        for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                            null != t[e[n]] && (this[e[n]] = t[e[n]])
                                }
                                return c(t, {
                                    list: s.emptyObject,
                                    pop: s.emptyObject
                                }),
                                    t.decode = function(t, e) {
                                        t instanceof a || (t = a.create(t));
                                        for (var n, i, o = void 0 === e ? t.len : t.pos + e, r = new u.live.ProductRefreshMessage.RequestInfo(u.live.ProductRefreshMessage.RequestInfo.prototype); t.pos < o; ) {
                                            var c = t.uint32();
                                            switch (c >>> 3) {
                                                case 1:
                                                    r.list === s.emptyObject && (r.list = {});
                                                    var p = t.uint32() + t.pos;
                                                    for (n = 0,
                                                             i = null; t.pos < p; ) {
                                                        var l = t.uint32();
                                                        switch (l >>> 3) {
                                                            case 1:
                                                                n = t.int32();
                                                                break;
                                                            case 2:
                                                                i = u.live.ProductRefreshMessage.RequestInfo.Request.decode(t, t.uint32());
                                                                break;
                                                            default:
                                                                t.skipType(7 & l)
                                                        }
                                                    }
                                                    r.list[n] = i;
                                                    break;
                                                case 2:
                                                    r.pop === s.emptyObject && (r.pop = {});
                                                    var p = t.uint32() + t.pos;
                                                    for (n = 0,
                                                             i = null; t.pos < p; ) {
                                                        var l = t.uint32();
                                                        switch (l >>> 3) {
                                                            case 1:
                                                                n = t.int32();
                                                                break;
                                                            case 2:
                                                                i = u.live.ProductRefreshMessage.RequestInfo.Request.decode(t, t.uint32());
                                                                break;
                                                            default:
                                                                t.skipType(7 & l)
                                                        }
                                                    }
                                                    r.pop[n] = i;
                                                    break;
                                                default:
                                                    t.skipType(7 & c)
                                            }
                                        }
                                        return r
                                    }
                                    ,
                                    t.Request = function() {
                                        function t(t) {
                                            if (this.params = {},
                                                t)
                                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                                        }
                                        return c(t, {
                                            path: "",
                                            params: s.emptyObject,
                                            delay_param: null
                                        }),
                                            t.decode = function(t, e) {
                                                t instanceof a || (t = a.create(t));
                                                for (var n, i, o = void 0 === e ? t.len : t.pos + e, r = new u.live.ProductRefreshMessage.RequestInfo.Request(u.live.ProductRefreshMessage.RequestInfo.Request.prototype), c = {
                                                    1: ["path", t.string, 0],
                                                    3: ["delay_param", u.live.DelayParam.decode, 1]
                                                }; t.pos < o; ) {
                                                    var l = t.uint32()
                                                        , f = l >>> 3;
                                                    if (c[f]) {
                                                        p(r, t, c[f], l);
                                                        continue
                                                    }
                                                    if (2 === f) {
                                                        r.params === s.emptyObject && (r.params = {});
                                                        var d = t.uint32() + t.pos;
                                                        for (n = "",
                                                                 i = ""; t.pos < d; ) {
                                                            var _ = t.uint32();
                                                            switch (_ >>> 3) {
                                                                case 1:
                                                                    n = t.string();
                                                                    break;
                                                                case 2:
                                                                    i = t.string();
                                                                    break;
                                                                default:
                                                                    t.skipType(7 & _)
                                                            }
                                                        }
                                                        r.params[n] = i
                                                    } else
                                                        t.skipType(7 & l)
                                                }
                                                return r
                                            }
                                            ,
                                            t
                                    }(),
                                    t
                            }(),
                            t.ProductInfo = function() {
                                function t(t) {
                                    if (t)
                                        for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                            null != t[e[n]] && (this[e[n]] = t[e[n]])
                                }
                                return c(t, {
                                    title: "",
                                    cover: ""
                                }),
                                    t.decode = function(t, e) {
                                        t instanceof a || (t = a.create(t));
                                        for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.ProductRefreshMessage.ProductInfo(u.live.ProductRefreshMessage.ProductInfo.prototype), o = {
                                            1: ["title", t.string, 0],
                                            2: ["cover", t.string, 0]
                                        }; t.pos < n; ) {
                                            var r = t.uint32()
                                                , s = r >>> 3;
                                            if (o[s]) {
                                                p(i, t, o[s], r);
                                                continue
                                            }
                                            t.skipType(7 & r)
                                        }
                                        return i
                                    }
                                    ,
                                    t
                            }(),
                            t
                    }(),
                    t.ProductUpdateMessage = function() {
                        function t(t) {
                            if (this.updated_product_ids = [],
                                t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            updated_product_ids: s.emptyArray,
                            update_type: 0,
                            promotion_id: f,
                            updated_product_info: null,
                            sold_out: !1,
                            updated_coupon_info: null,
                            updated_campaign_info: null,
                            update_timestamp: f,
                            update_sku_info: null,
                            updated_commentary_video_info: null,
                            updated_group_info: null,
                            hot_atmosphere: null,
                            can_sold: !1
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.ProductUpdateMessage(u.live.ProductUpdateMessage.prototype), o = {
                                    1: ["updated_product_ids", t.int64String, 6],
                                    2: ["update_type", t.int32, 0],
                                    3: ["promotion_id", t.int64String, 0],
                                    4: ["updated_product_info", u.live.UpdatedProductInfo.decode, 1],
                                    5: ["sold_out", t.bool, 0],
                                    6: ["updated_coupon_info", u.live.UpdatedCouponInfo.decode, 1],
                                    7: ["updated_campaign_info", u.live.UpdatedCampaignInfo.decode, 1],
                                    8: ["update_timestamp", t.int64String, 0],
                                    9: ["update_sku_info", u.live.UpdatedSkuInfo.decode, 1],
                                    10: ["updated_commentary_video_info", u.live.UpdatedCommentaryVideoInfo.decode, 1],
                                    11: ["updated_group_info", u.live.UpdatedGroupInfo.decode, 1],
                                    12: ["hot_atmosphere", u.live.HotAtmosphere.decode, 1],
                                    13: ["can_sold", t.bool, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.UpdatedProductInfo = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            price: f,
                            title: "",
                            cover: "",
                            status: f,
                            pop_upicon: ""
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.UpdatedProductInfo(u.live.UpdatedProductInfo.prototype), o = {
                                    1: ["price", t.int64String, 0],
                                    2: ["title", t.string, 0],
                                    3: ["cover", t.string, 0],
                                    4: ["status", t.int64String, 0],
                                    5: ["pop_upicon", t.string, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.UpdatedCouponInfo = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            tag: "",
                            coupon_url: "",
                            coupon_applet: "",
                            is_valid: !1,
                            coupon_meta_id: ""
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.UpdatedCouponInfo(u.live.UpdatedCouponInfo.prototype), o = {
                                    1: ["tag", t.string, 0],
                                    2: ["coupon_url", t.string, 0],
                                    3: ["coupon_applet", t.string, 0],
                                    4: ["is_valid", t.bool, 0],
                                    5: ["coupon_meta_id", t.string, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.UpdatedCampaignInfo = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            is_valid: !1,
                            label: "",
                            price: "",
                            pic: "",
                            start_time: "",
                            end_time: "",
                            time_start_label: "",
                            time_end_label: "",
                            user_limit: "",
                            is_preheat: "",
                            campaign_id: ""
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.UpdatedCampaignInfo(u.live.UpdatedCampaignInfo.prototype), o = {
                                    1: ["is_valid", t.bool, 0],
                                    2: ["label", t.string, 0],
                                    3: ["price", t.string, 0],
                                    4: ["pic", t.string, 0],
                                    5: ["start_time", t.string, 0],
                                    6: ["end_time", t.string, 0],
                                    7: ["time_start_label", t.string, 0],
                                    8: ["time_end_label", t.string, 0],
                                    9: ["user_limit", t.string, 0],
                                    10: ["is_preheat", t.string, 0],
                                    11: ["campaign_id", t.string, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.UpdatedSkuInfo = function() {
                        function t(t) {
                            if (this.skus = {},
                                t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            skus: s.emptyObject,
                            min_price: f,
                            max_price: f,
                            unuse_min_price: f,
                            coupon_price: f
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n, i, o = void 0 === e ? t.len : t.pos + e, r = new u.live.UpdatedSkuInfo(u.live.UpdatedSkuInfo.prototype), c = {
                                    2: ["min_price", t.int64String, 0],
                                    3: ["max_price", t.int64String, 0],
                                    4: ["unuse_min_price", t.int64String, 0],
                                    5: ["coupon_price", t.int64String, 0]
                                }; t.pos < o; ) {
                                    var l = t.uint32()
                                        , f = l >>> 3;
                                    if (c[f]) {
                                        p(r, t, c[f], l);
                                        continue
                                    }
                                    if (1 === f) {
                                        r.skus === s.emptyObject && (r.skus = {});
                                        var d = t.uint32() + t.pos;
                                        for (n = "",
                                                 i = null; t.pos < d; ) {
                                            var _ = t.uint32();
                                            switch (_ >>> 3) {
                                                case 1:
                                                    n = t.string();
                                                    break;
                                                case 2:
                                                    i = u.live.SkuInfo.decode(t, t.uint32());
                                                    break;
                                                default:
                                                    t.skipType(7 & _)
                                            }
                                        }
                                        r.skus[n] = i
                                    } else
                                        t.skipType(7 & l)
                                }
                                return r
                            }
                            ,
                            t
                    }(),
                    t.SkuInfo = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            sku_id: "",
                            stock_num: f,
                            price: f,
                            coupon_price: f
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.SkuInfo(u.live.SkuInfo.prototype), o = {
                                    1: ["sku_id", t.string, 0],
                                    2: ["stock_num", t.int64String, 0],
                                    3: ["price", t.int64String, 0],
                                    4: ["coupon_price", t.int64String, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.UpdatedGroupInfo = function() {
                        function t(t) {
                            if (this.avatar_list = [],
                                t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            avatar_list: s.emptyArray,
                            joined: f,
                            group_size: f,
                            persent: f
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.UpdatedGroupInfo(u.live.UpdatedGroupInfo.prototype), o = {
                                    1: ["avatar_list", t.string, 2],
                                    2: ["joined", t.int64String, 0],
                                    3: ["group_size", t.int64String, 0],
                                    4: ["persent", t.int64String, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.UpdatedCommentaryVideoInfo = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            action: f
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.UpdatedCommentaryVideoInfo(u.live.UpdatedCommentaryVideoInfo.prototype), o = {
                                    1: ["action", t.int64String, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.LiveSellerMessage = function() {
                        function t(t) {
                            if (this.list_room_stats_data = [],
                                t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            msg_type: 0,
                            author_order_limit_info: null,
                            list_room_stats_data: s.emptyArray
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.LiveSellerMessage(u.live.LiveSellerMessage.prototype), o = {
                                    1: ["msg_type", t.int32, 0],
                                    2: ["author_order_limit_info", u.live.AuthorOrderLimitInfo.decode, 1],
                                    3: ["list_room_stats_data", u.live.StatsData.decode, 3]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.AuthorOrderLimitInfo = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            icon: null,
                            title: "",
                            content: "",
                            button: ""
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.AuthorOrderLimitInfo(u.live.AuthorOrderLimitInfo.prototype), o = {
                                    1: ["icon", u.live.ICON.decode, 1],
                                    2: ["title", t.string, 0],
                                    3: ["content", t.string, 0],
                                    4: ["button", t.string, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.ICON = function() {
                        function t(t) {
                            if (this.url_list = [],
                                t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            url_list: s.emptyArray,
                            width: 0,
                            height: 0
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.ICON(u.live.ICON.prototype), o = {
                                    1: ["url_list", t.string, 2],
                                    2: ["width", t.int32, 0],
                                    3: ["height", t.int32, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t.StatsData = function() {
                        function t(t) {
                            if (t)
                                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                                    null != t[e[n]] && (this[e[n]] = t[e[n]])
                        }
                        return c(t, {
                            value: "",
                            unit: "",
                            type: 0
                        }),
                            t.decode = function(t, e) {
                                t instanceof a || (t = a.create(t));
                                for (var n = void 0 === e ? t.len : t.pos + e, i = new u.live.StatsData(u.live.StatsData.prototype), o = {
                                    1: ["value", t.string, 0],
                                    2: ["unit", t.string, 0],
                                    3: ["type", t.int32, 0]
                                }; t.pos < n; ) {
                                    var r = t.uint32()
                                        , s = r >>> 3;
                                    if (o[s]) {
                                        p(i, t, o[s], r);
                                        continue
                                    }
                                    t.skipType(7 & r)
                                }
                                return i
                            }
                            ,
                            t
                    }(),
                    t
            }
        )()
    }
}]);

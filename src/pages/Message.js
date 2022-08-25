import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import CustomImage from "../components/CustomImage"

export default function Message(){
    const images = [
        "https://i.postimg.cc/4NG607Ff/img-11.jpg",
        "https://i.postimg.cc/kX7SsrBD/img-12.jpg",
        "https://i.postimg.cc/sXSW6sYG/img-13.jpg",
        "https://i.postimg.cc/PrMWnXBm/img-14.jpg",
        "https://i.postimg.cc/nLN7GCDt/img-15.jpg",
        "https://i.postimg.cc/8cm6G4n1/img-16.jpg",
        "https://i.postimg.cc/q766q4ZD/img-17.jpg",
        "https://i.postimg.cc/HWw5bWWf/img-18.jpg"
    ]

    return (
        <div className="section quote">
            <div className="col gallery">
                { images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                )) }
            </div>
            <p className="qoute-text"><FontAwesomeIcon icon={faQuoteLeft} /> Hi Emily小宝贝：</p>
            <p className="qoute-text"> 一周年快乐！很抱歉在一周年的前一天突然生病了不能陪你逛街、一起吃Shake Shack，希望我能尽快好起来补上这一顿，而且以后还是要继续每年的8月24日吃一次Shake Shack不能反悔！</p>
            <p className="qoute-text"> 这是我为我们一周年做的一个网页应用，主要功能就是可以根据你每天想要吃的 protein source、蔬菜、还有想要吃的零食甜品个性化制定健康食谱（这样的话你就不用每天担心自己是不是吃多然后不高兴啦！）。不过这个只是最初代版本，而且因为我编程水平还没有那么高哈哈所以功能非常有限。</p>
            <p className="qoute-text"> 最初有这个想法是因为发现你经常会饿的难受 / 生气、然后吃了一点零食又会开始觉得自己吃了太多，我在网上看了很多相关的文章，所以我虽然没有相同的经历但是也特别能够理解你。同时我也想要告诉你如果有什么不开心的事情或者难关一定要跟我分享，我会永远支持你理解你，然后不要害怕遇到问题，因为有我陪你一起寻找解决方法的！</p>
            <p className="qoute-text"> 另外我想给你说的是，我很喜欢和你一起做各种事情，所以请不要觉得我是在委屈自己，我委屈的很多时候只是自己明明陪你但是你却一点也不开心~ 我最喜欢看你笑的样子了！如果以后你有什么想要去的吃的干的学的，I am always down.</p>
            <p className="qoute-text"> P.S. 最近我经常用自己个人的电脑然后跟你说我在工作，有的时候也会听你埋怨觉得我把工作看的比你重要，但是其实我是在偷偷准备这个一周年惊喜，是不是保密工作做的还不错！希望你能喜欢呀~ </p>
            <p className="qoute-auther">- 爱你的王若备 Anthony</p>
        </div>        
    )
}
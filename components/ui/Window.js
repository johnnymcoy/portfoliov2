// Imports

// CSS Styles
import CSS from "./Window.module.scss";

function Window(props){
    function minimizeWindowHandler(){
        console.log("Minimize");
    }
    function maximizeWindowHandler(){
        console.log("Maximize");
    }
    function closeWindowHandler(){
        console.log("close Window");
    }
   return(
<div  className={CSS.window}>
    <div draggable={true} className={CSS.windowBorder}>
        <div className={CSS.titleBar}>
            <div className={CSS.controlBox}>
                <a className={`${CSS.button3d} ${CSS.minimize}`} onClick={minimizeWindowHandler}><span>&nbsp;</span></a>
                <a className={`${CSS.button3d} ${CSS.maximize}`} onClick={maximizeWindowHandler}><span>&nbsp;</span></a>
                <a className={`${CSS.button3d} ${CSS.close}`} onClick={closeWindowHandler}><span>&nbsp;</span></a>
            </div>
            <span className={CSS.title}>ClippyJS - Microsoft word</span>
        </div>
        <div draggable className={CSS.menuBar}>
            <a><span>F</span>ile</a>
            <a><span>E</span>dit</a>
            <a><span>V</span>iew</a>
            <a><span>i</span>nsert</a>
            <a><span>f</span>ormat</a>
            <a><span>t</span>ools</a>
            <a><span>t</span>able</a>
            <a><span>w</span>indow</a>
            <a><span>h</span>elp</a>
        </div>
        <div className={`${CSS.toolbar} ${CSS.floatLeft}`}>
            <a className={CSS.iNew}></a>
            <a className={CSS.iOpen}></a>
            <a className={CSS.iSave}></a>
            <span className={CSS.seperator}></span>
            <a className={CSS.iNew}></a>
            <a className={CSS.iOpen}></a>
            <a className={CSS.iSave}></a>
            <span className={CSS.seperator}></span>
            <a className={CSS.iNew}></a>
            <a className={CSS.iOpen}></a>
            <a className={CSS.iSave}></a>
            <span className={CSS.seperator}></span>
            <a className={CSS.iOpen}></a>
            <a className={CSS.iSave}></a>
            <div className={CSS.clear}></div>
        </div>
        <div className={`${CSS.toolbar} ${CSS.floatLeft}`}>
            <a className={CSS.iNew}></a>
            <span className={CSS.seperator}></span>
            <div className={CSS.picker}><span className={CSS.arrow}></span>Normal</div>
            <div className={CSS.picker}><span className={CSS.arrow}></span>Times New Roman</div>
            <div className={CSS.picker}><span className={CSS.arrow}></span>12</div>
            <span className={CSS.seperator}></span>
            <a className={CSS.iNew}></a>
            <a className={CSS.iNew}></a>
            <a className={CSS.iNew}></a>
            <span className={CSS.seperator}></span>
            <a className={CSS.iNew}></a>
            <a className={CSS.iNew}></a>
            <a className={CSS.iNew}></a>
            <div className={CSS.clear}></div>
        </div>
        <div className={`${CSS.toolbar} ${CSS.floatRight}`}>
            <a className={`${CSS.iFacebook} ${CSS.text}`}><span>Share</span><em>0</em></a>
            <a className={`${CSS.iTwitter}  ${CSS.text}`}><span>Tweet</span></a>
            <a className={`${CSS.iGithub} ${CSS.text}`}><span>Fork</span></a>
            <div className={CSS.clear}></div>
        </div>
        <div className={CSS.clear}></div>
        <div className={CSS.content}>
            <div className={CSS.contentBox}>
                <div className={CSS.topRuler}>
                    <div className={CSS.ruler}></div>
                </div>
                <div className={CSS.leftRuler}></div>
                <div className={CSS.documentScroller}>
                    <div className={CSS.documentContent}>
                        <div className={CSS.documentContainer}>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={CSS.statusBar}>
            <div className={CSS.statusBarContent}>
                <span className={CSS.box}>
                    Page 1
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Sec 1
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    1/1
                    &nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className={CSS.box}>
                    At 1
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Ln 1
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Col 1
                    &nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className={`${CSS.box} ${CSS.disabled}`}>REC</span>
                <span className={`${CSS.box} ${CSS.disabled}`}>TRK</span>
                <span className={`${CSS.box} ${CSS.disabled}`}>EXT</span>
                <span className={`${CSS.box} ${CSS.disabled}`}>OVR</span>
            </div>
        </div>
    </div>
</div>

);}

export default Window;
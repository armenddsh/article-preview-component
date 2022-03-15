const getCurrentBreakpoint = () => {
    const breakpointUnknown = 'unknown';
    const breakpointSM = document.getElementById('breakpoint-sm')?.offsetParent === null ? null : 'sm';
    const breakpointMD = document.getElementById('breakpoint-md')?.offsetParent === null ? null : 'md';
    const breakpointLG = document.getElementById('breakpoint-lg')?.offsetParent === null ? null : 'lg';
    const breakpointXL = document.getElementById('breakpoint-xl')?.offsetParent === null ? null : 'xl';
    const breakpoint2XL = document.getElementById('breakpoint-2xl')?.offsetParent === null ? null : '2xl';
    const breakpoint = breakpointSM ?? breakpointMD ?? breakpointLG ?? breakpointXL ?? breakpoint2XL ?? breakpointUnknown;
    return breakpoint;
};

let selected = false;
function handleClick(event) {
        const currentBreakPoint = getCurrentBreakpoint();
        if (!selected) {
            if (currentBreakPoint === "unknown" || currentBreakPoint === "sm") {
                vName.classList.add("hidden");
                vShare.classList.remove("hidden");
            } else {
                vShare.classList.remove("hidden");
                vShare.classList.add("md:absolute");
                vShare.classList.add("md:top-[-160px]");
                vShare.classList.add("md:left-[350px]");
                vShare.classList.add("md:w-[15rem]");
            }
        } else {
            vName.classList.remove("hidden");
            vShare.classList.add("hidden");
        }
    
        selected = !selected;
}

const shareDiv = document.getElementById("shareDiv");
const shareDiv2 = document.getElementById("shareDiv2");
const vShare = document.getElementById("vShare");
const vName = document.getElementById("vName");

shareDiv.addEventListener("click", handleClick);
shareDiv2.addEventListener("click", handleClick);
import svgPaths from "./svg-ehgg8djvf3";

export default function Window() {
  return (
    <div className="relative size-full" data-name="Window">
      <div className="absolute backdrop-blur-[40px] bg-[#f6f6f6] inset-0 rounded-[10px]" data-name="Window Frame">
        <div aria-hidden className="absolute border-[0.5px] border-[rgba(0,0,0,0.12)] border-solid inset-[-0.5px] pointer-events-none rounded-[10.5px]" />
      </div>
      <div className="absolute h-[28px] left-0 overflow-clip right-0 rounded-tl-[10px] rounded-tr-[10px] shadow-[0px_0.5px_0px_0px_rgba(0,0,0,0.15)] top-0" data-name="Titlebar">
        <div aria-hidden className="absolute bg-white inset-0 pointer-events-none rounded-tl-[10px] rounded-tr-[10px]" />
        <div className="absolute h-[12px] left-[8px] top-[8px] w-[52px]" data-name="Traffic Lights">
          <div className="absolute left-0 size-[12px] top-0" data-name="Control">
            <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
              <g id="Control">
                <path clipRule="evenodd" d={svgPaths.p2ca50880} fill="var(--fill-0, #EC6A5E)" fillRule="evenodd" />
                <path d={svgPaths.p107e4900} stroke="var(--stroke-0, black)" strokeOpacity="0.12" strokeWidth="0.5" />
              </g>
            </svg>
          </div>
          <div className="absolute left-[20px] size-[12px] top-0" data-name="Control">
            <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
              <g id="Control">
                <path clipRule="evenodd" d={svgPaths.p2ca50880} fill="var(--fill-0, #F5BF4F)" fillRule="evenodd" />
                <path d={svgPaths.p107e4900} stroke="var(--stroke-0, black)" strokeOpacity="0.12" strokeWidth="0.5" />
              </g>
            </svg>
          </div>
          <div className="absolute left-[40px] size-[12px] top-0" data-name="Control">
            <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
              <g id="Control">
                <path clipRule="evenodd" d={svgPaths.p2ca50880} fill="var(--fill-0, #61C554)" fillRule="evenodd" />
                <path d={svgPaths.p107e4900} stroke="var(--stroke-0, black)" strokeOpacity="0.12" strokeWidth="0.5" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}
import svgPaths from "./svg-g9rawykk40";

function PrimitiveH() {
  return (
    <div className="h-[32px] relative shrink-0 w-[450px]" data-name="Primitive.h2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#002e45] text-[24px] top-[-1px]">Submit a Request</p>
      </div>
    </div>
  );
}

function PrimitiveP() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[450px]" data-name="Primitive.p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5056] text-[14px] top-0 w-[433px]">{`Fill out the form below to submit a request to Washington County. We'll respond within 2-3 business days.`}</p>
      </div>
    </div>
  );
}

function DialogHeader() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[80px] items-start left-[24px] top-[24px] w-[450px]" data-name="DialogHeader">
      <PrimitiveH />
      <PrimitiveP />
    </div>
  );
}

function SubmitRequestModal() {
  return (
    <div className="absolute h-[24px] left-[91.63px] top-0 w-[8.641px]" data-name="SubmitRequestModal">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#f01a42] text-[16px] top-[-1px]">*</p>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#002e45] text-[16px] top-[-1px]">First Name</p>
      <SubmitRequestModal />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#757575] text-[14px]">Enter your first name</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(174,176,181,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="col-[1] content-stretch css-vsca90 flex flex-col gap-[8px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <PrimitiveLabel />
      <Input />
    </div>
  );
}

function SubmitRequestModal1() {
  return (
    <div className="absolute h-[24px] left-[89.91px] top-0 w-[8.641px]" data-name="SubmitRequestModal">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#f01a42] text-[16px] top-[-1px]">*</p>
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#002e45] text-[16px] top-[-1px]">Last Name</p>
      <SubmitRequestModal1 />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#757575] text-[14px]">Enter your last name</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(174,176,181,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex flex-col gap-[8px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <PrimitiveLabel1 />
      <Input1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[68px] relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function SubmitRequestModal2() {
  return (
    <div className="absolute h-[24px] left-[118.09px] top-0 w-[8.641px]" data-name="SubmitRequestModal">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#f01a42] text-[16px] top-[-1px]">*</p>
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#002e45] text-[16px] top-[-1px]">Email Address</p>
      <SubmitRequestModal2 />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#757575] text-[14px]">your.email@example.com</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(174,176,181,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="col-[1] content-stretch css-vsca90 flex flex-col gap-[8px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <PrimitiveLabel2 />
      <Input2 />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#002e45] text-[16px]">Phone Number</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#757575] text-[14px]">(435) 123-4567</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(174,176,181,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex flex-col gap-[8px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <PrimitiveLabel3 />
      <Input3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[68px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#002e45] text-[16px]">Department</p>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[133.672px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] text-center">Select a department</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #757575)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(174,176,181,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <PrimitiveSpan />
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel4 />
      <PrimitiveButton />
    </div>
  );
}

function SubmitRequestModal3() {
  return (
    <div className="absolute h-[24px] left-[113.83px] top-0 w-[8.641px]" data-name="SubmitRequestModal">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#f01a42] text-[16px] top-[-1px]">*</p>
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#002e45] text-[16px] top-[-1px]">Request Type</p>
      <SubmitRequestModal3 />
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[128.797px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] text-center">Select request type</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #757575)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(174,176,181,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <PrimitiveSpan1 />
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel5 />
      <PrimitiveButton1 />
    </div>
  );
}

function SubmitRequestModal4() {
  return (
    <div className="absolute h-[24px] left-[66.81px] top-0 w-[8.641px]" data-name="SubmitRequestModal">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#f01a42] text-[16px] top-[-1px]">*</p>
    </div>
  );
}

function PrimitiveLabel6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#002e45] text-[16px] top-[-1px]">Subject</p>
      <SubmitRequestModal4 />
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#757575] text-[14px]">Brief summary of your request</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(174,176,181,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel6 />
      <Input4 />
    </div>
  );
}

function SubmitRequestModal5() {
  return (
    <div className="absolute h-[24px] left-[97.13px] top-0 w-[8.641px]" data-name="SubmitRequestModal">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#f01a42] text-[16px] top-[-1px]">*</p>
    </div>
  );
}

function PrimitiveLabel7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#002e45] text-[16px] top-[-1px]">Description</p>
      <SubmitRequestModal5 />
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white h-[128px] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[16px] py-[12px] relative size-full">
          <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#aeb0b5] text-[16px]">Please provide detailed information about your request...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(174,176,181,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5056] text-[14px] top-0 w-[434px]">Please include as much detail as possible to help us process your request efficiently.</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[208px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel7 />
      <Textarea />
      <Paragraph />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[80.484px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(174,176,181,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[9px] relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#212121] text-[14px] text-center">Cancel</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#05547a] h-[36px] relative rounded-[8px] shrink-0 w-[137.297px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Submit Request</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[12px] h-[53px] items-start pt-[17px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(174,176,181,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <Button />
      <Button1 />
    </div>
  );
}

function SubmitRequestModal6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[745px] items-start left-[24px] top-[136px] w-[774px]" data-name="SubmitRequestModal">
      <Container2 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
            <path d={svgPaths.p48af40} id="Vector" stroke="var(--stroke-0, #212121)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
            <path d={svgPaths.p30908200} id="Vector" stroke="var(--stroke-0, #212121)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[466px] opacity-70 rounded-[2px] size-[16px] top-[16px]" data-name="Primitive.button">
      <Icon2 />
    </div>
  );
}

export default function PrimitiveDiv() {
  return (
    <div className="bg-white border border-[rgba(0,0,0,0.12)] border-solid overflow-clip relative rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-full" data-name="Primitive.div">
      <DialogHeader />
      <SubmitRequestModal6 />
      <PrimitiveButton2 />
    </div>
  );
}
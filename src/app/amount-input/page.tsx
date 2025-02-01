import Header from '@/component/common/Header';

const AmountInput = () => {
  return (
    <>
      <Header />
<<<<<<< HEAD
      <section>
        <h3>10,000원</h3>
        <p>1만원</p>
        <div>
          <ul className="flex flex-wrap [&>li]:w-[calc(100%/3)]">
=======
      <section className="h-dvh pb-10">
        <div className="h-3/5 flex flex-col justify-center items-center">
          <h3 className="text-4xl font-semibold">0 원</h3>
          <p className="pt-4 text-base text-gray-800">1만원</p>
        </div>
        <div className="h-2/5 flex flex-col justify-end gap-6">
          <ul
            className="flex flex-wrap [&>li]:w-[calc(100%/3)] [&_li]:text-2xl 
          [&_button]:relative [&_button]:block [&_button]:w-full [&_button]:h-full [&_button]:py-4 [&_button]:rounded-lg [&_button]:overflow-hidden [&_button]:font-bold [&_button]:text-gray-800
          [&_button:active]:scale-90
          [&_button_span]:relative [&_button_span]:z-[2]
          [&_button::before]:content-[''] [&_button::before]:block [&_button::before]:absolute [&_button::before]:top-0 [&_button::before]:left-0 [&_button::before]:w-full [&_button::before]:h-full [&_button::before]:bg-gray-100 [&_button::before]:rounded-md
          [&_button::before]:opacity-0 [&_button::before]:scale-100
          [&_button::before]:transition-opacity [&_button::before]:duration-300
          "
          >
>>>>>>> 1e47874 (feat: publish to home, amount-input page)
            <li>
              <button className="active:before:opacity-100 active:before:scale-75 before:gray-100 opacity-100">
                <span>1</span>
              </button>
            </li>
            <li>
              <button className="active:before:opacity-100 active:before:scale-75 before:gray-100 opacity-100">
                <span>2</span>
              </button>
            </li>
            <li>
              <button className="active:before:opacity-100 active:before:scale-75 before:gray-100 opacity-100">
                <span>3</span>
              </button>
            </li>
            <li>
              <button className="active:before:opacity-100 active:before:scale-75 before:gray-100 opacity-100">
                <span>4</span>
              </button>
            </li>
            <li>
              <button className="active:before:opacity-100 active:before:scale-75 before:gray-100 opacity-100">
                <span>5</span>
              </button>
            </li>
            <li>
              <button className="active:before:opacity-100 active:before:scale-75 before:gray-100 opacity-100">
                <span>6</span>
              </button>
            </li>
            <li>
              <button className="active:before:opacity-100 active:before:scale-75 before:gray-100 opacity-100">
                <span>7</span>
              </button>
            </li>
            <li>
              <button className="active:before:opacity-100 active:before:scale-75 before:gray-100 opacity-100">
                <span>8</span>
              </button>
            </li>
            <li>
              <button className="active:before:opacity-100 active:before:scale-75 before:gray-100 opacity-100">
                <span>9</span>
              </button>
            </li>
            <li>
              <button className="text-lg active:before:opacity-100 active:before:scale-75 before:gray-100 opacity-100 ">
                <span> 취소</span>
              </button>
            </li>
            <li>
              <button className="active:before:opacity-100 active:before:scale-75 before:gray-100 opacity-100">
                <span>0</span>
              </button>
            </li>
            <li>
              <button className="block w-[18px] h-[16px] bg-[url('/images/icon_arrow.svg')] bg-no-repeat bg-center active:before:opacity-100 active:before:scale-75 before:gray-100 opacity-100">
                <em className="sr-only">지우기</em>
              </button>
            </li>
          </ul>
          <ul className="flex gap-2 [&>li]:flex-1 [&_button]:block [&_button]:w-full [&_button]:h-full [&_button]:py-3 [&_button]:rounded-lg">
            <li>
              <button className="bg-blue-100 text-primary active:bg-blue-200">
                받기
              </button>
            </li>
            <li>
              <button className="bg-primary text-gray-100 active:bg-blue-800">
                보내기
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default AmountInput;

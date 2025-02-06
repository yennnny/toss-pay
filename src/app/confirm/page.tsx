const Confirm = () => {
  return (
    <section className="flex flex-col h-dvh">
      <div className="flex flex-col justify-center items-center h-full text-center">
        <img src="/images/banks/kbBank.png" alt="" />
        <h2 className="text-2xl font-semibold mt-2">
          박바비님께 <br />
          10,0000원을 보냅니다
        </h2>
        <strong className="block my-2 text-primary">
          국민은행 123412345678
        </strong>
        <p className="px-3 py-1 text-lg bg-gray-200 rounded-md">
          받는 분 통장 표시: 김토스
        </p>
      </div>
      <div className="mt-auto mb-10">
        <div className="flex items-center gap-2 relative">
          <img src="/images/banks/kbBank.png" alt="" className="w-10" />
          <div>
            <strong className="text-lg">국민은행 계좌에서 출금</strong>
            <strong className="flex text-gray-800">잔액 880,000원</strong>
          </div>
          <button className="absolute block top-1/2 -translate-y-1/2 right-0 w-2 h-2 border-t border-r border-gray-800 rotate-45">
            <span className="sr-only">계좌 잔액 보기</span>
          </button>
        </div>
        <button className="block w-full py-3 mt-5 bg-primary text-white rounded-xl font-bold ">
          보내기
        </button>
      </div>
    </section>
  );
};

export default Confirm;

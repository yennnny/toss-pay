import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="relative flex items-center gap-2 border-b border-b-gray-200">
        <Image src="/images/user_default.png" alt="" width={60} height={60} />
        <div className="py-5">
          <h1 className="font-bold text-xl">김토스</h1>
          <p className="text-primary">신용 768점</p>
        </div>
        <button className="absolute top-1/2 right-0 -translate-y-1/2 text-gray-100 bg-primary rounded-lg p-[0.5em_1em]">
          송금
        </button>
      </div>
      <div className="pt-3">
        <div className="flex justify-between mb-2">
          <h2 className="text-xl font-bold">계좌</h2>
          <button className="flex items-center gap-1 text-gray-700 font-semibold after:content-[''] after:block after:w-2 after:h-2 after:border-r-2 after:border-b-2 after:border-gray-700 after:-rotate-45">
            2,838,883원
          </button>
        </div>
        <ul>
          <li className="relative flex items-center gap-3">
            <Image
              src="/images/banks/kbBank.png"
              alt="국민은행 로고"
              width={40}
              height={40}
              className="bg-[#6A6256] p-2 rounded-full"
            />
            <div>
              <p>국민은행 계좌</p>
              <strong>33,283 원</strong>
            </div>
            <button className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-100 text-gray-800 font-bold rounded-lg p-[0.5em_1em]">
              송금
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

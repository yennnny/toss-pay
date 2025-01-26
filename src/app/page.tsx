import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Image src="" alt="" />
        <div>
          <h1>김토스</h1>
          <p>신용 768점</p>
        </div>
        <button>송금</button>
      </div>
      <div>
        <h2>계좌</h2>
        <button>2,838,883원</button>
        <ul>
          <li>
            <img src="" alt="" />
            <p>국민은행 계좌</p>
            <strong>33,283원</strong>
            <button>송금</button>
          </li>
        </ul>
      </div>
    </>
  );
}

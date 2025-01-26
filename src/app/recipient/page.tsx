import Link from "next/link";

const Recipient = () => {
  return (
    <>
      <h2>10,000원 받는 분 입력</h2>
      <nav>
        <Link href="/recipient/recent-list">최근 리스트</Link>
        <Link href="/recipient/direct-input">계좌 직접 입력</Link>
        <Link href="/recipient/contacts">연락처</Link>
      </nav>
    </>
  );
};

export default Recipient;

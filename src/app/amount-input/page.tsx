import Header from '@/component/common/Header';

const AmountInput = () => {
  return (
    <>
      <Header />
      <section>
        <h3>10,000원</h3>
        <p>1만원</p>
        <div>
          <ul className="flex flex-wrap [&>li]:w-[calc(100%/3)]">
            <li>
              <button>1</button>
            </li>
            <li>
              <button>2</button>
            </li>
            <li>
              <button>3</button>
            </li>
            <li>
              <button>4</button>
            </li>
            <li>
              <button>5</button>
            </li>
            <li>
              <button>6</button>
            </li>
            <li>
              <button>7</button>
            </li>
            <li>
              <button>8</button>
            </li>
            <li>
              <button>9</button>
            </li>
            <li>
              <button>취소</button>
            </li>
            <li>
              <button>0</button>
            </li>
            <li>
              <button>지우기</button>
            </li>
          </ul>
          <ul>
            <li>
              <button>받기</button>
            </li>
            <li>
              <button>보내기</button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default AmountInput;

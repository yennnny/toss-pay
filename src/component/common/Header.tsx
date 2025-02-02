'use client';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  title?: string;
}

const Header = ({ title = '송금' }: HeaderProps) => {
  const router = useRouter();

  return (
<<<<<<< HEAD
    <header className="relative w-full flex justify-between items-center">
=======
    <header className="relative w-full h-[52px] px-4 flex justify-between items-center">
>>>>>>> 6c1f758 (feat: publish to recipinent pages)
      <button
        onClick={() => router.back()}
        className="after:content-[''] after:block after:w-2 after:h-2 after:border-l-2 after:border-b-2 after:border-gray-700 after:rotate-45"
      >
        <span className="sr-only">뒤로가기</span>
      </button>
<<<<<<< HEAD
      <h2 className="absolute inset-x-1/2 inset-y-1/2 whitespace-nowrap">
        {title}
      </h2>
=======
      <h2 className="mx-auto font-semibold">{title}</h2>
>>>>>>> 6c1f758 (feat: publish to recipinent pages)
    </header>
  );
};

export default Header;

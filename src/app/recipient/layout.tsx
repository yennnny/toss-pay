'use client';
import Header from '@/component/common/Header';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs: { href: string; label: string }[] = [
  { href: '/recipient/recent-list', label: '최근' },
  { href: '/recipient/direct-input', label: '계좌' },
  { href: '/recipient/contacts', label: '연락처' },
];

const Recipient = () => {
  const pathname = usePathname();
  return (
    <>
      <Header title="10,000원 받는 분 입력" />
      <nav
        className="flex border-b border-b-gray-200"
        aria-label="받는 사람 선택"
      >
        {tabs.map((tab) => {
          const isActive: boolean = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`basis-1/3 text-center py-2 border-b-2₩${
                isActive
                  ? 'text-gray-900 border-b-gray-900'
                  : 'text-gray-700 border-b-gray-700'
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Recipient;

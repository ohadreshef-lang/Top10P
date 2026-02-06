import Link from 'next/link';

interface AffiliateDisclosureProps {
  variant?: 'banner' | 'inline';
}

export default function AffiliateDisclosure({ variant = 'banner' }: AffiliateDisclosureProps) {
  if (variant === 'inline') {
    return (
      <p className="text-gray-500 text-sm">
        <strong>Disclosure:</strong> We may earn a commission when you click links on our site.{' '}
        <Link href="/affiliate-disclosure" className="text-purple-600 hover:underline">
          Learn more
        </Link>
      </p>
    );
  }

  return (
    <p className="text-gray-400 text-xs mb-4">
      Affiliate Disclosure: We may receive compensation when you click links and make purchases.
      This does not affect our rankings.{' '}
      <Link href="/affiliate-disclosure" className="text-gray-500 underline hover:no-underline">
        Learn more
      </Link>
    </p>
  );
}

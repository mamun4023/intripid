import React, { lazy, Suspense } from 'react';

import TopBanner from '../../sections/home/Banner/TopBanner';
import LanguageSelector from '../../sections/home/LanguageSelector/languageSelector';
import TopNavBar from '../../sections/home/TopNavBar/TopNavBar';
import TopSection from '../../sections/home/Body/TopSection';
// import MiddleSection from '../../sections/home/Body/MiddleSection';
// import BottomSection from '../../sections/home/Body/BottomSection';
// import FooterTop from '../../sections/home/Footer/footerTop';
// import FooterBottom from '../../sections/home/Footer/footerBottom';
import Loader from '../../components/loader/loader';

// const TopBanner = lazy(() => import('../../sections/home/Banner/TopBanner'));
// const LanguageSelector = lazy(()=> import('../../sections/home/LanguageSelector/languageSelector'))
// const TopNavBar = lazy(()=> import('../../sections/home/TopNavBar/TopNavBar'));
// const TopSection = lazy(()=> import('../../sections/home/TopNavBar/TopNavBar'))
const MiddleSection = lazy(() =>
    import('../../sections/home/Body/MiddleSection')
);
const BottomSection = lazy(() =>
    import('../../sections/home/Body/BottomSection')
);
const FooterTop = lazy(() => import('../../sections/home/Footer/footerTop'));
const FooterBottom = lazy(() =>
    import('../../sections/home/Footer/footerBottom')
);

export default function Home() {
    return (
        <div>
            <div>
                <LanguageSelector />
            </div>
            <div className="sticky top-0 w-full z-20">
                <TopNavBar />
            </div>
            <div>
                <TopBanner />
            </div>
            <TopSection />

            <Suspense fallback={<Loader />}>
                <MiddleSection />
            </Suspense>

            <Suspense fallback={<Loader />}>
                <BottomSection />
            </Suspense>

            <Suspense fallback={<Loader />}>
                <FooterTop />
            </Suspense>

            <Suspense fallback={<Loader />}>
                <FooterBottom />
            </Suspense>
        </div>
    );
}

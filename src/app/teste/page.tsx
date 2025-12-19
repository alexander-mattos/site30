import HeroSection from './hero-section'
import Header from './header'
import type { NavigationSection } from './header'

const navigationData: NavigationSection[] = [
    {
        title: 'Home',
        href: '#'
    },
    {
        title: 'Products',
        href: '#'
    },
    {
        title: 'About Us',
        href: '#'
    },
    {
        title: 'Contacts',
        href: '#'
    }
]

const HeroSectionPage = () => {
    return (
        <div className='relative'>
            {/* Header Section */}
            <Header navigationData={navigationData} />

            {/* Main Content */}
            <main className='flex flex-col'>
                <HeroSection />
            </main>
        </div>
    )
}

export default HeroSectionPage

import Navigation from './Navigation';

const Layout = ({ children }) => {
    return (
        <div>
            <Navigation />
            <main>{children}</main>
        </div>
    );
};

export default Layout;

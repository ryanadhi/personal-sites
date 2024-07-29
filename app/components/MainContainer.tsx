const MainContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-4">
            { children }
        </main>
    );
};

export default MainContainer;
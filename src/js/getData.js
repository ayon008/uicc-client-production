export const getData = async (link) => {
    const res = await fetch(link, {
        cache: 'no-store', // Ensures fresh data is fetched every time
    });
    return res.json();
};

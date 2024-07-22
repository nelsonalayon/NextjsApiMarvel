async function getData(url: string, options?: RequestInit) {
    const res = await fetch(url, options);
    if(!res.ok) throw new Error('Failed to fetch data');
    return res.json();
}

export default getData
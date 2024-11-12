// レスポンスの型を定義
type Menu = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
};

const fetchMenu = async (): Promise<Menu[]> => {
    const fetchData = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
    const response: Menu[] = await fetchData.json();
    return response
}

export default fetchMenu

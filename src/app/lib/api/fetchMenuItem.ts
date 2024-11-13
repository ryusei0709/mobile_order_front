// レスポンスの型を定義
type Menu = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
};

const fetchMenuItem = async (menuId: string): Promise<Menu> => {
    const fetchData = await fetch(`https://jsonplaceholder.typicode.com/photos/${menuId}`)
    const response: Menu = await fetchData.json();
    return response
}

export default fetchMenuItem

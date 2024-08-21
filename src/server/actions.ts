import { useInfiniteQuery } from "@tanstack/react-query";

export function getCatFacts() {
    async function fetchCatFactsPage({pageParam = 1}) {
        const [catFacts, users] = await Promise.all([
            fetch(`https://catfact.ninja/facts?page=${pageParam}`).then((res) =>
                res.json(),
            ),
            fetch('https://randomuser.me/api?results=10').then((res) =>
                res.json(),
            )
        ])
        
        return {
            data: catFacts.data.map(({fact}: {fact: string}, index: number) => ({
                name: `${users.results[index].name.first} ${users.results[index].name.last}`,
                picture: users.results[index].picture.large,
                fact
            })),
            nextPage: catFacts.next_page_url ? Number(catFacts.next_page_url.slice(-1)) : null
        }
    }

    const infiniteQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['catFacts'],
        queryFn: fetchCatFactsPage,
        getNextPageParam: (lastPage, pages) => lastPage.nextPage
    });
    
    return infiniteQuery;
}
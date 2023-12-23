document.addEventListener('DOMContentLoaded', function() {
    buildTable();
});

const buildTable = () => {
    const myFreetime = [
        {
            image: 'image000000.jpg',
        },
        {
            image: 'image000000(1).jpg',
        },
        {
            image: 'image000001.jpg',
        },
        {
            image: 'image000002.jpg',
        },
        {
            image: 'IMG_0420.JPG',
        },
        {
            image: 'IMG_0895.jpeg',
        },
        {
            image: 'IMG_1408.jpeg',
        },
        {
            image: 'IMG_1916.jpeg',
        },
        {
            image: 'IMG_2043.jpeg',
        },
        {
            image: 'IMG_2069.jpeg',
        },
        {
            image: 'IMG_2080.jpeg',
        },
        {
            image: 'IMG_2090.jpeg',
        },
        {
            image: 'IMG_2091.jpeg',
        },
        {
            image: 'IMG_2095.jpeg',
        },
        {
            image: 'IMG_2098.jpeg',
        },
        {
            image: 'IMG_2101.jpeg',
        },
        {
            image: 'IMG_2102.jpeg',
        },
        {
            image: 'IMG_2106.jpeg',
        },
        {
            image: 'IMG_2107.jpeg',
        },
        {
            image: 'IMG_2109.jpeg',
        },
        {
            image: 'IMG_2113.jpeg',
        },
        {
            image: 'IMG_2118.jpeg',
        },
        {
            image: 'IMG_2122.jpeg',
        },
        {
            image: 'IMG_2126.jpeg',
        },
        {
            image: 'IMG_2140.jpeg',
        },
        {
            image: 'IMG_2555.jpeg',
        },
        {
            image: 'IMG_2558.jpeg',
        },
        {
            image: 'IMG_2559.jpeg',
        },
        {
            image: 'IMG_2560.jpeg',
        },
        {
            image: 'IMG_2565.jpeg',
        },
        {
            image: 'IMG_2568.jpeg',
        },
        {
            image: 'IMG_2570.jpeg',
        },
        {
            image: 'IMG_2573.jpeg',
        },
        {
            image: 'IMG_2574.jpeg',
        },
        {
            image: 'IMG_20211114_230531.jpg',
        },
        {
            image: 'IMG_20211114_230552.jpg',
        },
        {
            image: 'IMG_20211121_112132.jpg',
        },
        {
            image: 'IMG_20211228_102250131.jpg',
        },
        {
            image: 'IMG_20220610_105758537.jpg',
        },
        {
            image: 'IMG_20220625_113518272.jpg',
        },
        {
            image: 'IMG_20220625_142614927.jpg',
        },
        {
            image: 'IMG_20220702_145405946.jpg',
        },
        {
            image: 'IMG_20220815_074522292.jpg',
        },
        {
            image: 'IMG_20220815_074902795.jpg',
        },
        {
            image: 'IMG_20220815_074909770.jpg',
        },
        {
            image: 'IMG_20220815_075013540.jpg',
        },
        {
            image: 'IMG_20220820_205043196.jpg',
        }
    ];

    const intrestGrid = document.getElementById('shows');

    myFreetime.forEach(show => {
        console.log(show.title);
        const div = document.createElement('div');

        const divHTML =    
        `<div class="col">` +
        `   <div class="card mt-2">` +
        `       <image src="${show.image}" class="card-img img-undefined"/>` +
        `   </div>`+
        `</div>`;

        div.innerHTML = divHTML;
        intrestGrid.appendChild(div);
    });
}
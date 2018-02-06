let movies = [
    { name: 'Batman VS Superman' },
    { name: 'Coco' },
    { name: 'Wonder Woman' },
    { name: 'Thor Ragnarok' },
    { name: 'The Shape of Water' },
    { name: 'Star Wars' },
    { name: 'Deadpool' },
    { name: 'Anabelle' }
]

let currentPage = 1;
let itemsPerPage = 3;


function renderPagination() {

    let countItems = movies.length;
    let pages = Math.ceil(countItems / itemsPerPage);

    let $pagination = $('.pagination');

    // generate numbers
    for (var i = 0; i < pages; i++) {
        let numbPages = i + 1;
        $pagination.append('<li class="page-item"><a class="page-link" href="#" onClick="changePage(' + numbPages + ')">' + numbPages + '</a></li>');
    }

    // show default page 
    changePage(1);
}

function changePage(page) {
    // get element
    $container = $('.wrapper');

    // clean conatiner before fill data
    $container.empty();

    for (var i = (page - 1) * itemsPerPage; i < (page * itemsPerPage); i++) {

        if (!movies[i]) {
            break;
        }

        $container.append('<div class="card"><div class="card-body">' + movies[i].name + '</div> </div>');
    }
}

$(window).on('load', renderPagination);


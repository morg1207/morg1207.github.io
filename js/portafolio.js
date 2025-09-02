function createCellModal(imageUrl, projectName, extraContent, mdFile, id) {
    // Create the cell and modal HTML
    var cellModalHtml = `
        <div class="cell">
            <div class="card" style="background-color: #9e575700;">
                <div class="card-content">
                    <div class="media" style="display: flex; flex-direction: column; align-items: center;">
                        <div class="media-left" style="width: 66.67%; display: flex; justify-content: center; align-items: center;">
                            <figure class="image" style="width: 100%; height: auto;">
                                <img style="border-radius: 10%; max-width: 100%; height: auto;"
                                    src="${imageUrl}"
                                    alt="Placeholder image" />
                            </figure>
                        </div>
                        <div class="media-content" style="width: 100%; display: flex; flex-direction: column; align-items: center; margin-top: 20px;">
                            <button class="button custom-color1" id="open-modal-${id}" style="white-space: normal;">
                                <p class="title is-6">${projectName}</p>
                            </button>
                            <div class="content" style="text-align: justify; margin-top: 10px;">
                                ${extraContent}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="modal-${id}">
            <div class="modal-background">
                <div class="modal-card-body" style="width: 100%; height: 100%; box-sizing: border-box;">
                    <zero-md src="${mdFile}"></zero-md>
                </div>
                <button class="modal-close is-large" aria-label="close" id="close-modal-${id}"></button>
            </div>
        </div>
    `;

    // Create a function to attach the event listeners
    var attachEventListeners = function () {
        document.getElementById('open-modal-' + id).addEventListener('click', function () {
            document.getElementById('modal-' + id).classList.add('is-active');
        });

        document.getElementById('close-modal-' + id).addEventListener('click', function () {
            document.getElementById('modal-' + id).classList.remove('is-active');
        });
    };

    return {
        html: cellModalHtml,
        attachEventListeners: attachEventListeners
    };
}

function createAndAppendCellModal(container, imageUrl, projectName, extraContent, mdFile, id) {
    var cellModal = createCellModal(imageUrl, projectName, extraContent, mdFile, id);
    var div = document.createElement('div');
    div.innerHTML = cellModal.html;
    while (div.firstChild) {
        container.appendChild(div.firstChild);
    }
    cellModal.attachEventListeners();
}

// Pagination variables
var currentPage = 1;
var itemsPerPage = 4;

// ----------------------------------------------------------------------
// Array that contains the data for all your CellModals !!!
import { cellModalData } from './projects-DATA.js';
// Reverse the dataset
var reversedCellModalData = cellModalData.slice().reverse();
// ----------------------------------------------------------------------

function showPage(page) {
    var start = (page - 1) * itemsPerPage;
    var end = start + itemsPerPage;
    var cellModalContainer = document.getElementById('modal-container');

    // Remove all existing cells
    while (cellModalContainer.firstChild) {
        cellModalContainer.removeChild(cellModalContainer.firstChild);
    }

    // Add the cells for the current page
    for (var i = start; i < end && i < reversedCellModalData.length; i++) {
        var data = reversedCellModalData[i];
        createAndAppendCellModal(
            cellModalContainer,
            data.imageUrl,
            data.projectName,
            data.extraContent,
            data.mdFile,
            data.id
        );
    }

    // Update the pagination component
    var paginationList = document.getElementById('pagination-list');
    while (paginationList.firstChild) {
        paginationList.removeChild(paginationList.firstChild);
    }
    for (var i = 1; i <= Math.ceil(reversedCellModalData.length / itemsPerPage); i++) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.className = 'pagination-link' + (i === page ? ' is-current' : '');
        a.textContent = i;
        a.addEventListener('click', function() {
            currentPage = parseInt(this.textContent);
            showPage(currentPage);
        });
        li.appendChild(a);
        paginationList.appendChild(li);
    }
}

window.onload = function() {
    showPage(currentPage);

    document.getElementById('prev-page').addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    document.getElementById('next-page').addEventListener('click', function() {
        if (currentPage < Math.ceil(reversedCellModalData.length / itemsPerPage)) {
            currentPage++;
            showPage(currentPage);
        }
    });
};





// <!-- VERSION1 of cards -->

// <div class="cell">
//     <div class="card" style="background-color: #9e575700;">
//         <div class="card-content">
//             <div class="media">
//                 <div class="media-left">
//                     <figure class="image is-96x96">
//                         <img style="border-radius: 10%;"
//                             src="https://bulma.io/assets/images/placeholders/96x96.png"
//                             alt="Placeholder image" />
//                     </figure>
//                 </div>
//                 <div class="media-content">
//                     <p class="title is-5">Project</p>
//                     <div class="content">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
//                     </div>
//                     <button class="button is-primary"
//                         id="open-modal">Read More</button>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>






// <!-- VERSION2 of cards : current -->

// <div class="cell">
//     <div class="card" style="background-color: #9e575700;">
//         <div class="card-content">
//             <div class="media">
//                 <div class="media-left">
//                     <figure class="image is-96x96">
//                         <img style="border-radius: 10%;"
//                             src="https://bulma.io/assets/images/placeholders/96x96.png"
//                             alt="Placeholder image" />
//                     </figure>
//                 </div>
//                 <div class="media-content">
//                     <button class="button custom-color1" id="open-modal">
//                         <p class="title is-6">Project name</p>
//                     </button>
//                     <div class="content">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing
//                         elit. Phasellus nec iaculis mauris.
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
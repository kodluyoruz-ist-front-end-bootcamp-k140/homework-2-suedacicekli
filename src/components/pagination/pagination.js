import { useState, useEffect } from "react";
// Pagination bar oluşturuluyor.
const Pagination = ({ pages, setCurrentPage }) => {
    // sayfa sayısını belirtelim

    // barda bulunan butonları teker teker göstermek için bir for döngüsü yazacağız
    const numOfPages = [];

    for (let i = 1; i <= pages; i++) {
        numOfPages.push(i);
    }


    const [currentButton, setCurrentButton] = useState(1);

    console.log(pages);

    // useEffect ile sayfa değiştiği zaman yenileneerek yeni verilerin yazdırılması sağlandı.
    useEffect(() => {
        setCurrentPage(currentButton)
    }, [currentButton, setCurrentPage])

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">

                <li className={`${currentButton === 1 ? 'page-item disabled ' : 'page-item'}`}><a href="#!" className="page-link"
                    onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}
                >Previous</a></li>

                {

                    numOfPages.map((page, index) => {
                        return (
                            <li key={index} className={`${currentButton === page ? 'page-item active' : 'page-item'}`} ><a href="#!" className="page-link"
                                onClick={() => setCurrentButton(page)}
                            >{page}</a></li>
                        )

                    })
                }

                <li className={`${currentButton === numOfPages.length ? 'page-item disabled ' : 'page-item'}`}><a href="#!" className="page-link"
                    onClick={() => setCurrentButton((prev) => prev === numOfPages.length ? prev : prev + 1)}
                >Next</a></li>

            </ul>
        </nav>
    )
}

export default Pagination;

/* --------------------------------
 <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item"><a class="page-link" href="#">5</a></li>
                <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                </li>
*/
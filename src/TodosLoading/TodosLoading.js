import './TodosLoading.css'

function TodosLoading() {
    return (
        <li>
            <div className="container">
                <div className="box">
                    <div className="skeleton">
                        <div className="skeleton-left">
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export { TodosLoading };
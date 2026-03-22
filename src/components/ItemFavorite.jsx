export const ItemFavorite = ({ name, uid }) => {

function removeFavorite() {
    console.log("Removido de favoritos: " + uid);
    }

    return (
        <li className="dropdown-item d-flex justify-content-between align-items-center gap-2">
            <span>{name}</span>
            <button className="btn btn-link" title={`Remove ${name} from favorites`} onClick={removeFavorite}>
                <i class="fa-solid fa-trash"></i>
            </button>
        </li>
    )

}
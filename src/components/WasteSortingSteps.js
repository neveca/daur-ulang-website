import { FaRecycle, FaTrashAlt, FaLeaf, FaShoppingBag } from 'react-icons/fa';

export default function WasteSortingSteps() {
return (
    <div className="space-y-4">
        <div className="flex items-center space-x-4">
        <FaRecycle className="text-green-500 text-2xl" />
        <p className="text-lg">Siapkan tempat sampah terpisah (organik, plastik, kaca, logam).</p>
        </div>
        <div className="flex items-center space-x-4">
        <FaTrashAlt className="text-grey text-2xl" />
        <p className="text-lg">Buang sampah pada tempatnya untuk menjaga kebersihan.</p>
        </div>
        <div className="flex items-center space-x-4">
        <FaLeaf className="text-green-700 text-2xl" />
        <p className="text-lg">Gunakan sampah organik untuk kompos atau pembuatan pupuk.</p>
        </div>
        <div className="flex items-center space-x-4">
        <FaShoppingBag className="text-accent text-2xl" />
        <p className="text-lg">Bawa kantong belanja sendiri untuk mengurangi penggunaan plastik.</p>
        </div>
    </div>
);
}

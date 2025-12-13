import React, { useContext } from 'react';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { AdminContext } from '../../context/AdminContext';

/**
 * EditControls component.
 * Conditionally renders Add, Edit, and Delete buttons based on admin status.
 *
 * @param {Object} props
 * @param {Function} [props.onAdd] - Handler for add action.
 * @param {Function} [props.onEdit] - Handler for edit action.
 * @param {Function} [props.onDelete] - Handler for delete action.
 * @param {string} [props.className] - Additional classes.
 * @param {boolean} [props.variant='default'] - 'default' (row) or 'overlay' (absolute position on cards).
 */
export default function EditControls({
    onAdd,
    onEdit,
    onDelete,
    className = '',
    variant = 'default'
}) {
    const { isAdmin } = useContext(AdminContext);

    if (!isAdmin) return null;

    const baseClasses = "flex items-center gap-2";
    const buttonBaseClasses = "p-2 rounded-full transition-all duration-200 hover:scale-110 active:scale-95";

    // Style variants
    const variantClasses = {
        default: "",
        overlay: "absolute top-2 right-2 bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-sm border border-neutral-200 dark:border-neutral-800 rounded-full p-1"
    };

    // Button specific styles
    const addStyle = "bg-green-100 text-green-600 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/50";
    const editStyle = "bg-blue-100 text-blue-600 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50";
    const deleteStyle = "bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50";

    // Overlay simpler buttons (no background usually, or minimal)
    const overlayButtonStyle = "hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400";

    if (variant === 'overlay') {
        return (
            <div className={`${variantClasses.overlay} ${className} z-10`}>
                {onEdit && (
                    <button onClick={onEdit} className={`${buttonBaseClasses} ${overlayButtonStyle}`} title="Edit">
                        <Pencil size={14} />
                    </button>
                )}
                {onDelete && (
                    <button onClick={onDelete} className={`${buttonBaseClasses} ${overlayButtonStyle} hover:text-red-500 dark:hover:text-red-400`} title="Delete">
                        <Trash2 size={14} />
                    </button>
                )}
            </div>
        );
    }

    return (
        <div className={`${baseClasses} ${className}`}>
            {onAdd && (
                <button onClick={onAdd} className={`${buttonBaseClasses} ${addStyle}`} title="Add New">
                    <Plus size={18} />
                </button>
            )}
            {onEdit && (
                <button onClick={onEdit} className={`${buttonBaseClasses} ${editStyle}`} title="Edit">
                    <Pencil size={18} />
                </button>
            )}
            {onDelete && (
                <button onClick={onDelete} className={`${buttonBaseClasses} ${deleteStyle}`} title="Delete">
                    <Trash2 size={18} />
                </button>
            )}
        </div>
    );
}

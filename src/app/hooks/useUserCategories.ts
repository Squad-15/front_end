import { useState, useEffect } from 'react';

export function useUserCategories(userId: string) {
    const [categories, setCategories] = useState([]);	
    const [loading, setLoading] = useState(true);
    const [error,] = useState(null);

    useEffect(() => {
        if(!userId) return;

        setLoading(true);
        fetch(`http://localhost:8080/user/${userId}/categoria`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar categorias do usuário');
            }
            return response.json();
        })
        .then(data => {
            setCategories(data);
            setLoading(false);
        })
    }, [userId]);

    return { categories, loading, error };
} 
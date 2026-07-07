import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    Zap,
    Droplet,
    Hammer,
    Brush,
    Lock,
    Leaf,
    Sparkles,
    Car
} from 'lucide-react-native';
export const useSymbols = (category, responsive) => {
    const categorias = [
        { nombre: 'Electricidad', color: '#EBF7EE', icono: <Zap size={responsive.font(22)} color="#34C759" /> },
        { nombre: 'Plomeria', color: '#E8F2FF', icono: <Droplet size={responsive.font(22)} color="#007AFF" /> },
        { nombre: 'Mecanica', color: '#FDF6ED', icono: <Hammer size={responsive.font(22)} color="#A27B5C" /> },
        { nombre: 'Pintura', color: '#E8F8F5', icono: <Brush size={responsive.font(22)} color="#1ABC9C" /> },
        { nombre: 'Cerrajeria', color: '#F2F2F7', icono: <Lock size={responsive.font(22)} color="#636E72" /> },
        { nombre: 'Jardineria', color: '#EAF9E7', icono: <Leaf size={responsive.font(22)} color="#4A7C59" /> },
        { nombre: 'Limpieza', color: '#E8F2FF', icono: <Sparkles size={responsive.font(22)} color="#007AFF" /> },
        { nombre: 'Mecanica', color: '#D6EAF8', icono: <Car size={responsive.font(22)} color="#5DADE2" /> }
    ];
    const value = categorias.find(cat => cat.nombre === category);
    return { value: value };
}


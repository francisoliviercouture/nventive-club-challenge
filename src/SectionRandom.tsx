import React, { useState } from 'react';
import { Athlete } from './models/athlete.model';

interface SectionRandomProps {
    athletes: Array<Athlete>
}

export default function SectionRandom(props: SectionRandomProps) {
    const { athletes } = props;

    const [winner, setWinner] = useState<Athlete | null>();

    function onSelectWinner(): void {
        const listParticipating = athletes.filter((el, idx, arr) => el.can_participate);
        const winner = listParticipating[Math.floor(Math.random() * listParticipating.length)];
        setWinner(winner);
    }

    return (
        <>
            <button onClick={onSelectWinner}>Select a winner</button>
            <span style={{ padding: 16 }}>{winner && winner.name}</span>
        </>
    );
}
import React from 'react';
import { Athlete } from './models/athlete.model';

interface AthleteListProps {
    athletes: Array<Athlete>
}

export default function AthleteList({ athletes }: AthleteListProps) {

    function formatDistanceToKm(distance: number): string {
        if (distance !== 0) {
            return `${distance / 1000}`;
        }
        return '';
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Run distance (km)</th>
                        <th>Bike distance (km)</th>
                        <th>Other distance (km)</th>
                        <th>Is eligible?</th>
                    </tr>
                </thead>
                <tbody>
                    {athletes.map((value, idx) =>
                        <tr key={idx}>
                            <td>{value.name}</td>
                            <td>{formatDistanceToKm(value.distance_this_week.run)}</td>
                            <td>{formatDistanceToKm(value.distance_this_week.bike)}</td>
                            <td>{formatDistanceToKm(value.distance_this_week.others)}</td>
                            <td>{value.can_participate ? <span style={{ color: 'green' }}>✓</span> : 'Not yet'}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}
import React, { FunctionComponent, useEffect } from 'react';
import { Athlete } from '../../../models/athlete.model';

interface SortedListAthleteProps {
    athletes: Array<Athlete>;
}

export const SortedListAthlete: FunctionComponent<SortedListAthleteProps> = ({ athletes }) => {

    useEffect(() => { console.log('test') }, []);

    function formatDistanceToKm(distance: number): string {
        if (distance !== 0) {
            return `${distance / 1000}`;
        }
        return '';
    }

    return (
        <>
            {athletes.map((value, _) =>
                <tr key={value.id}>
                    <td>{value.name}</td>
                    <td>{formatDistanceToKm(value.distance_this_week.run)}</td>
                    <td>{formatDistanceToKm(value.distance_this_week.bike)}</td>
                    <td>{formatDistanceToKm(value.distance_this_week.others)}</td>
                    <td>{value.can_participate ? <span style={{ color: 'green' }}>✓</span> : 'Not yet'}</td>
                </tr>
            )}
        </>
    );
}
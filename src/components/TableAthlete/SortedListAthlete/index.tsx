import React, { FunctionComponent } from 'react';
import { Athlete } from '../../../models/athlete.model';

import moment from 'moment';
import 'moment-duration-format';

interface SortedListAthleteProps {
    athletes: Array<Athlete>;
}

export const SortedListAthlete: FunctionComponent<SortedListAthleteProps> = ({ athletes }) => {

    function formatDistanceToKm(distance: number): string {
        if (distance !== 0) {
            return `${distance / 1000}`;
        }
        return '';
    }

    function formatStringToTimestamp(value: string): string {
        const hours = value.split(':')[0];
        const minutes = value.split(':')[1];
        const seconds = value.split(':')[2];

        return moment
            .duration({
                seconds: parseInt(seconds),
                minutes: parseInt(minutes),
                hours: parseInt(hours),
            })
            .format("h[h] m[m] s[s]");
    }

    return (
        <>
            {athletes.map((value, _) =>
                <tr key={value.id}>
                    <td>{value.name}</td>
                    <td>{formatStringToTimestamp(value.distance_this_week.total_time)}</td>
                    <td>{formatDistanceToKm(value.distance_this_week.run)}</td>
                    <td>{formatDistanceToKm(value.distance_this_week.bike)}</td>
                    <td>{formatDistanceToKm(value.distance_this_week.others)}</td>
                    <td>{value.can_participate ? <span style={{ color: 'green' }}>✓</span> : 'Not yet'}</td>
                </tr>
            )}
        </>
    );
}
import { Athlete } from "../../models/athlete.model";
import React, { useState, useCallback, useEffect } from "react";
import { TableHeaderOrder, TableHeaderFilter } from "../TableHeaderFilter";
import { SortedListAthlete } from "./SortedListAthlete";

interface TableAthleteProps {
    athletes: Array<Athlete>
}

export default function TableAthlete({ athletes }: TableAthleteProps) {
    const [currentList, setCurrentList] = useState<Array<Athlete>>(athletes);

    const onOrderByName = useCallback((order: TableHeaderOrder) => {
        const sorted = athletes.sort((l: Athlete, r: Athlete) => {
            const nl = l.name[0].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase();
            const nr = r.name[0].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase();

            if (order === TableHeaderOrder.ascending) {
                if (nl > nr) { return 1; }
                if (nl < nr) { return -1; }
            }

            if (order === TableHeaderOrder.descending) {
                if (nl < nr) { return 1; }
                if (nl > nr) { return -1; }
            }
            return 0;
        });
        setCurrentList([...sorted]);
    }, [athletes]);

    useEffect(() => {
        onOrderByName(TableHeaderOrder.ascending);
    }, [onOrderByName]);

    function onOrderByRunDistance(order: TableHeaderOrder): void {
        const sorted = athletes.sort((l: Athlete, r: Athlete) => {
            const nl = l.distance_this_week.run;
            const nr = r.distance_this_week.run;

            if (order === TableHeaderOrder.ascending) {
                if (nl > nr) { return 1; }
                if (nl < nr) { return -1; }
            }

            if (order === TableHeaderOrder.descending) {
                if (nl < nr) { return 1; }
                if (nl > nr) { return -1; }
            }
            return 0;
        });
        setCurrentList([...sorted]);
    }

    function onOrderByBikeDistance(order: TableHeaderOrder): void {
        const sorted = athletes.sort((l: Athlete, r: Athlete) => {
            const nl = l.distance_this_week.bike;
            const nr = r.distance_this_week.bike;

            if (order === TableHeaderOrder.ascending) {
                if (nl > nr) { return 1; }
                if (nl < nr) { return -1; }
            }

            if (order === TableHeaderOrder.descending) {
                if (nl < nr) { return 1; }
                if (nl > nr) { return -1; }
            }
            return 0;
        });
        setCurrentList([...sorted]);
    }

    function onOrderByOtherDistance(order: TableHeaderOrder): void {
        const sorted = athletes.sort((l: Athlete, r: Athlete) => {
            const nl = l.distance_this_week.others;
            const nr = r.distance_this_week.others;

            if (order === TableHeaderOrder.ascending) {
                if (nl > nr) { return 1; }
                if (nl < nr) { return -1; }
            }

            if (order === TableHeaderOrder.descending) {
                if (nl < nr) { return 1; }
                if (nl > nr) { return -1; }
            }
            return 0;
        });
        setCurrentList([...sorted]);
    }

    function onOrderByEligible(order: TableHeaderOrder): void {
        const sorted = athletes.sort((l: Athlete, r: Athlete) => {
            if (order === TableHeaderOrder.ascending) {
                if (l.can_participate) { return -1; }
                if (r.can_participate) { return 1; }
            }

            if (order === TableHeaderOrder.descending) {
                if (l.can_participate) { return 1; }
                if (r.can_participate) { return -1; }
            }
            return 0;
        });
        setCurrentList([...sorted]);
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th><TableHeaderFilter onToggle={onOrderByName}>Name</TableHeaderFilter></th>
                        <th><TableHeaderFilter onToggle={onOrderByRunDistance}>Run distance (km)</TableHeaderFilter></th>
                        <th><TableHeaderFilter onToggle={onOrderByBikeDistance}>Bike distance (km)</TableHeaderFilter></th>
                        <th><TableHeaderFilter onToggle={onOrderByOtherDistance}>Other distance (km)</TableHeaderFilter></th>
                        <th><TableHeaderFilter startOrder={TableHeaderOrder.ascending} onToggle={onOrderByEligible}>Is eligible?</TableHeaderFilter></th>
                    </tr>
                </thead>
                <tbody>
                    <SortedListAthlete athletes={currentList} />
                </tbody>
            </table>
        </>
    );
}
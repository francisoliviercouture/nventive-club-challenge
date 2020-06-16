import { Activity } from "./activity.model";
import { DistanceThisWeek } from "./distanceThisWeek.model";

export interface Athlete {
    id: string,
    name: string,
    activities: Array<Activity>,
    distance_this_week: DistanceThisWeek,
    can_participate: boolean
};

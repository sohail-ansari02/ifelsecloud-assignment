import { FeatureCard } from "./feature-card";
import { NewUser } from "./new-user";
import { RecentOrder } from "./recent-order";

export interface Dashboard {
    top_cards: FeatureCard[],
    new_users: NewUser[],
    recent_orders: RecentOrder[],
}

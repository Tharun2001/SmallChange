export interface TradeStock {
    name: string;
    code: string;
    quantity: number;
    price: number;
    asset_class : string;
    trade_type : string;
    date: string; // YYYY/MM/DD
}
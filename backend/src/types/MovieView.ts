import { RowDataPacket } from "mysql2";
export interface MovieView extends RowDataPacket {
  movie_id: number;
  view_count: number;
}

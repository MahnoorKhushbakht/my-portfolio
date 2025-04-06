import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    return HttpResponse.json(
      [
        { id: 1, name: "Leanne Graham" },
        { id: 2, name: "Ervin Howell" },
        { id: 3, name: "Clementine Bauch" },
        { id: 4, name: "Patricia Lebsack" }
      ],
      { status: 200 }
    );
  }),
];
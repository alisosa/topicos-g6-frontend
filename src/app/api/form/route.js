import { NextResponse } from "next/server";
import axios from 'axios';

export async function PUT(req) {
  const body = await req.json();
  try {
    const url = 'http://localhost:8080/form/update';

    const { data } = await axios.put(url, body, {});

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    if (error.response) {
      return NextResponse.json({ error: error.response.data }, { status: error.response.status });
    } else if (error.request) {
      return NextResponse.json({ error: error.request }, { status: 444 });
    }
    return NextResponse.json({ error: error.message }, { status: 422 });
  }
}

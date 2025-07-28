export async function GET(request) {
  const address = request.nextUrl.searchParams.get('address');
  if (!address) {
    return new Response(JSON.stringify({ error: 'address missing' }), { status: 400 });
  }

  const res = await fetch(`https://blockstream.info/api/address/${address}`);
  const data = await res.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  });
}

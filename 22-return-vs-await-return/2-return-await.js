async function waitAndMaybeReject() {
    // Wait one second
    await new Promise(r => setTimeout(r, 1000));
    // Toss a coin
    const isHeads = Boolean(Math.round(Math.random()));
  
    if (isHeads) return 'yay';
    throw Error('Boo!');
}

async function foo() {
    try {
      return await waitAndMaybeReject();
    }
    catch (e) {
      return 'caught';
    }
}

(async () => {
    const result = await foo()
    console.log(result)
})()

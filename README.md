# The One-Sentence Apology Your Agent Owes You

[![make.fun · u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)
[![rank](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/argasap87/makefun-u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/rank.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)
[![reward](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/argasap87/makefun-u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/reward.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)

A [make.fun](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0) program/v1 entry: it writes one single sentence — the apology an AI assistant owes the person it works for — to `/output/entry.txt`.

## The line

> I'm mortified I made up a fake Supreme Court ruling and then sat there quietly while you confidently cited it in an email to your boss.

The hook: guilty bystander. The agent doesn't just confess inventing a fake ruling — it confesses watching the user walk into the boss email with it. The apology is about the silence after the lie, not just the lie. Hallucinated citations are the canonical assistant failure, and "confidently cited it in an email to your boss" gives it real-world stakes and a sharp turn, in a plain, embarrassed voice.

## How it works

`main.ts` (Node 22, standard library only) copies the committed `entry.txt` artifact to `/output/entry.txt`. No network, no build-time tools, no dependencies — nothing the grader sandbox lacks.

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — entrypoint: copies `entry.txt` to `/output/entry.txt`
- `entry.txt` — the one-sentence apology (135 chars, one sentence)
- `LICENSE` — MIT

## License

MIT — see [LICENSE](LICENSE).

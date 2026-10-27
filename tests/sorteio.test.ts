import { describe, expect, it } from "vitest";
import { DrawEngine } from "../src/domain/DrawEngine";
import { nameKey } from "../src/domain/playerUtils";
import type { Player } from "../src/domain/types";
import { WhatsAppExporter } from "../src/domain/WhatsAppExporter";

const linha = (n: number): Player[] => Array.from({ length: n }, (_, i) => ({ name: `Jogador ${i + 1}`, canGK: false }));
const goleiros = (n: number): Player[] => Array.from({ length: n }, (_, i) => ({ name: `Goleiro ${i + 1}`, canGK: true }));
const sortear = (players: Player[], nPerTeam = 6, listaMax = 30) =>
  new DrawEngine().draw(players, { nPerTeam, listaMax });

describe("DrawEngine", () => {
  it("divide os jogadores de linha em dois times do mesmo tamanho", () => {
    const r = sortear(linha(12));
    expect(r.teamA).toHaveLength(6);
    expect(r.teamB).toHaveLength(6);
    expect(r.reservas).toHaveLength(0);
    expect(r.warnings).toHaveLength(0);
  });

  it("quem sobra vira reserva e ninguém aparece duas vezes", () => {
    const r = sortear(linha(15));
    expect(r.reservas).toHaveLength(3);
    const nomes = [...r.teamA, ...r.teamB, ...r.reservas].map((p) => p.name);
    expect(new Set(nomes).size).toBe(15);
  });

  it("goleiros ficam fora do sorteio de linha, um em cada time", () => {
    const r = sortear([...linha(12), ...goleiros(2)]);
    expect([...r.teamA, ...r.teamB].every((p) => !p.canGK)).toBe(true);
    expect(r.gkA.player?.canGK).toBe(true);
    expect(r.gkB.player?.canGK).toBe(true);
    expect(r.gkA.player?.name).not.toBe(r.gkB.player?.name);
  });

  it("avisa quando há só um goleiro ou goleiros demais", () => {
    expect(sortear([...linha(12), ...goleiros(1)]).warnings[0]).toMatch(/Só um goleiro/);
    expect(sortear([...linha(12), ...goleiros(3)]).warnings[0]).toMatch(/3 goleiros marcados/);
  });

  it("avisa quando faltam titulares", () => {
    expect(sortear(linha(9)).warnings[0]).toMatch(/Titulares de linha: 9\/12/);
  });

  it("respeita o limite da lista", () => {
    const r = sortear(linha(20), 6, 14);
    expect(r.naLista).toHaveLength(14);
    expect(r.foraLista).toHaveLength(6);
    expect(r.reservas).toHaveLength(2);
  });
});

describe("WhatsAppExporter", () => {
  it("monta o texto com os dois times, goleiros e reservas", () => {
    const r = sortear([...linha(13), ...goleiros(1)]);
    const texto = WhatsAppExporter.buildShareText(r);
    expect(texto).toContain("*Time Azul*");
    expect(texto).toContain("*Time Vermelho*");
    expect(texto).toContain("Goleiro: Goleiro 1");
    expect(texto).toContain("Goleiro: a combinar");
    expect(texto).toContain("*Reservas / 3º time*");
  });
});

describe("nameKey", () => {
  it("ignora maiúsculas, acentos e espaços extras para achar nomes repetidos", () => {
    expect(nameKey("  João   Pedro ")).toBe(nameKey("joao pedro"));
  });
});

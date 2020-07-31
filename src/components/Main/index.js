import React, { Component } from 'react';

import {
  FaSpinner, FaDizzy, FaRadiation, FaSearch, FaBatteryFull, FaBatteryHalf, FaExclamationTriangle,
} from 'react-icons/fa';
import api from '../../services/api';

import { Loading, Infos, Principal } from './styles';

export default class Main extends Component {
  state={
    country: {},
    loading: false,
    err: false,
    states: [],
    search: '',
  }

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const [brasil, states] = await Promise.all([
        api.get('/brazil'),
        api.get('/'),
      ]);

      this.setState({
        country: brasil.data.data,
        loading: false,
        states: states.data.data,
      });
    } catch (err) {
      this.setState({
        loading: false,
        err: true,
      });
    }
  }

  formatDate = (data) => {
    this.dataNu = `${data.replace(/-/g, '').replace(/T/g, '').replace(/:/g, '')}`;
    this.dataFormat = `${this.dataNu.slice(6, 8)}/${this.dataNu.slice(4, 6)}/${this.dataNu.slice(0, 4)}`;
    return this.dataFormat;
  }

  handleInputChange = (e) => {
    this.setState({ search: e.target.value });
  }

  render() {
    const {
      country, loading, states, search, err,
    } = this.state;

    const statesFilter = states.filter((state) => state.state.toLowerCase().indexOf(
      search.toLowerCase(),
    ) !== -1);

    if (err) {
      return (
        <Loading>
          <FaExclamationTriangle size={30} color="#F12E47" />
          <p>Erro. Recarregue a página.</p>
        </Loading>
      );
    }

    if (loading) {
      return (
        <Loading loading={String(loading)}>
          <FaSpinner size={40} color="#F12E47" />
        </Loading>
      );
    }

    return (
      <Principal>

        <p className="date">
          Ultima atualização: {this.formatDate(String(country.updated_at))}
        </p>

        <Infos>
          <div>
            <h2>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg"
                alt="BR"
              />
              {String(country.country).replace('z', 's')}
            </h2>
            <p><FaRadiation /> Confirmados: {country.confirmed}</p>
            <p><FaBatteryHalf /> Ativos: {country.cases}</p>
            <p><FaDizzy /> Mortes: {country.deaths}</p>
            <p><FaBatteryFull /> Recuperados: {country.recovered}</p>
          </div>
        </Infos>

        <p>Pequise o Estado:</p>
        <input
          type="text"
          placeholder="Ex: Rio Grande do Norte"
          value={search}
          onChange={this.handleInputChange}
        />

        <Infos>
          {statesFilter.map((uf) => (
            <div key={String(uf.uf)}>
              <h2>
                <img
                  src={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${uf.uf}.png`}
                  alt={String(uf.uf)}
                />
                {uf.state} ({uf.uf})
              </h2>
              <p><FaRadiation /> Confirmados: {uf.cases}</p>
              <p><FaDizzy /> Mortes: {uf.deaths}</p>
              <p><FaSearch /> Suspeitos: {uf.suspects}</p>
            </div>
          ))}
        </Infos>
      </Principal>
    );
  }
}

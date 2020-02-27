package com.perea.overheard.repository.search;

import com.perea.overheard.domain.Topic;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link Topic} entity.
 */
public interface TopicSearchRepository extends ElasticsearchRepository<Topic, Long> {
}
